"""Capa de datos REAL (no mock). Usa Postgres (Neon) si hay DATABASE_URL; si no,
cae a SQLite en disco -> SIEMPRE persiste de verdad. Pensada para facturación
electrónica de PYMES en Colombia (estructura DIAN-ready)."""
import os
import json

DATABASE_URL = os.environ.get("DATABASE_URL")
_IS_PG = bool(DATABASE_URL)

if _IS_PG:
    import psycopg  # type: ignore
    _PH = "%s"
else:
    import sqlite3
    _PH = "?"
    _SQLITE_PATH = os.environ.get("SQLITE_PATH", "/tmp/app.db")


def _conn():
    if _IS_PG:
        return psycopg.connect(DATABASE_URL, autocommit=True)
    c = sqlite3.connect(_SQLITE_PATH)
    return c


def init_db() -> None:
    """Crea la tabla de facturas si no existe (idempotente)."""
    serial = "SERIAL PRIMARY KEY" if _IS_PG else "INTEGER PRIMARY KEY AUTOINCREMENT"
    ddl = f"""
    CREATE TABLE IF NOT EXISTS facturas (
      id {serial},
      numero TEXT NOT NULL,
      fecha TEXT NOT NULL,
      cliente_nombre TEXT NOT NULL,
      cliente_nit TEXT,
      cliente_email TEXT,
      items TEXT NOT NULL,
      subtotal REAL NOT NULL,
      iva_pct REAL NOT NULL,
      iva_valor REAL NOT NULL,
      retefuente_pct REAL NOT NULL,
      retefuente_valor REAL NOT NULL,
      total REAL NOT NULL,
      forma_pago TEXT,
      estado TEXT NOT NULL,
      cufe TEXT
    )"""
    con = _conn()
    try:
        cur = con.cursor()
        cur.execute(ddl)
        if not _IS_PG:
            con.commit()
    finally:
        con.close()


def next_consecutivo(prefijo: str = "FE") -> str:
    """Consecutivo de factura (numeración autorizada por resolución DIAN)."""
    con = _conn()
    try:
        cur = con.cursor()
        cur.execute("SELECT COUNT(*) FROM facturas")
        n = (cur.fetchone()[0] or 0) + 1
        return f"{prefijo}-{n:05d}"
    finally:
        con.close()


_COLS = ["numero", "fecha", "cliente_nombre", "cliente_nit", "cliente_email",
         "items", "subtotal", "iva_pct", "iva_valor", "retefuente_pct",
         "retefuente_valor", "total", "forma_pago", "estado", "cufe"]


def insert_factura(d: dict) -> dict | None:
    vals = [d.get(c) for c in _COLS]
    ph = ", ".join([_PH] * len(_COLS))
    con = _conn()
    try:
        cur = con.cursor()
        if _IS_PG:
            cur.execute(f"INSERT INTO facturas ({', '.join(_COLS)}) VALUES ({ph}) RETURNING id", vals)
            new_id = cur.fetchone()[0]
        else:
            cur.execute(f"INSERT INTO facturas ({', '.join(_COLS)}) VALUES ({ph})", vals)
            con.commit()
            new_id = cur.lastrowid
    finally:
        con.close()
    return get_factura(new_id)


def _row_to_dict(row) -> dict:
    keys = ["id"] + _COLS
    d = {k: row[i] for i, k in enumerate(keys)}
    try:
        d["items"] = json.loads(d["items"]) if d.get("items") else []
    except Exception:
        d["items"] = []
    return d


def list_facturas() -> list:
    con = _conn()
    try:
        cur = con.cursor()
        cur.execute("SELECT * FROM facturas ORDER BY id DESC")
        return [_row_to_dict(r) for r in cur.fetchall()]
    finally:
        con.close()


def get_factura(fid: int) -> dict | None:
    con = _conn()
    try:
        cur = con.cursor()
        cur.execute(f"SELECT * FROM facturas WHERE id = {_PH}", [fid])
        r = cur.fetchone()
        return _row_to_dict(r) if r else None
    finally:
        con.close()


def resumen() -> dict:
    """Totales para el dashboard: facturado, IVA recaudado, por estado."""
    fs = list_facturas()
    facturado = sum(f["total"] for f in fs)
    iva = sum(f["iva_valor"] for f in fs)
    pendiente = sum(f["total"] for f in fs if f["estado"] != "Pagada")
    return {
        "count": len(fs),
        "facturado": round(facturado, 2),
        "iva_recaudado": round(iva, 2),
        "pendiente": round(pendiente, 2),
        "pagadas": sum(1 for f in fs if f["estado"] == "Pagada"),
    }
