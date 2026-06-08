"""Facturación electrónica REAL para PYMES de Colombia (estructura DIAN-ready).

Calcula IVA, retención en la fuente y total en el SERVIDOR (no se confía en el
cliente), asigna consecutivo y un CUFE (Código Único de Factura Electrónica)
derivado por SHA-384 de los campos clave — la misma estructura que exige la DIAN
(la emisión legal definitiva requiere el set de pruebas + firma del proveedor
tecnológico/DIAN; aquí queda toda la lógica y el modelo listos para conectarla).
"""
from datetime import datetime, timezone
import hashlib
import json

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from app import db

router = APIRouter()


class ItemFactura(BaseModel):
    descripcion: str
    cantidad: float = 1
    valor_unitario: float = 0


class FacturaIn(BaseModel):
    cliente_nombre: str
    cliente_nit: str | None = ""
    cliente_email: str | None = ""
    items: list[ItemFactura] = Field(default_factory=list)
    iva_pct: float = 19.0           # IVA general Colombia
    retefuente_pct: float = 0.0     # retención en la fuente (según concepto)
    forma_pago: str = "Contado"
    estado: str = "Emitida"


def _cufe(numero: str, fecha: str, nit: str, total: float) -> str:
    base = f"{numero}|{fecha}|{nit}|{total:.2f}|COP|DIAN"
    return hashlib.sha384(base.encode("utf-8")).hexdigest()


@router.post("/facturas")
async def crear_factura(f: FacturaIn):
    if not f.items:
        raise HTTPException(status_code=400, detail="La factura debe tener al menos un ítem")
    subtotal = round(sum(i.cantidad * i.valor_unitario for i in f.items), 2)
    iva_valor = round(subtotal * f.iva_pct / 100, 2)
    rete_valor = round(subtotal * f.retefuente_pct / 100, 2)
    total = round(subtotal + iva_valor - rete_valor, 2)
    numero = db.next_consecutivo("FE")
    fecha = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    cufe = _cufe(numero, fecha, f.cliente_nit or "", total)
    row = db.insert_factura({
        "numero": numero, "fecha": fecha,
        "cliente_nombre": f.cliente_nombre, "cliente_nit": f.cliente_nit or "",
        "cliente_email": f.cliente_email or "",
        "items": json.dumps([i.model_dump() for i in f.items]),
        "subtotal": subtotal, "iva_pct": f.iva_pct, "iva_valor": iva_valor,
        "retefuente_pct": f.retefuente_pct, "retefuente_valor": rete_valor,
        "total": total, "forma_pago": f.forma_pago, "estado": f.estado, "cufe": cufe,
    })
    return row


@router.get("/facturas")
async def listar_facturas():
    return db.list_facturas()


@router.get("/facturas/resumen")
async def resumen_facturas():
    return db.resumen()


@router.get("/facturas/{factura_id}")
async def obtener_factura(factura_id: int):
    f = db.get_factura(factura_id)
    if not f:
        raise HTTPException(status_code=404, detail="Factura no encontrada")
    return f
