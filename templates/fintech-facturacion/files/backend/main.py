"""Backend REAL de facturación electrónica (PYMES Colombia). FastAPI + Postgres
(Neon) con fallback SQLite. Persiste de verdad y calcula impuestos en servidor."""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app import db
from app.routers import factura

app = FastAPI(title="Facturación PYME API")
app.add_middleware(
    CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"],
)


@app.on_event("startup")
async def _startup() -> None:
    try:
        db.init_db()
    except Exception as exc:  # noqa: BLE001 -> no tumbar el arranque
        import logging
        logging.getLogger("uvicorn").warning("db init failed: %s", exc)


@app.get("/health")
async def health():
    return {"status": "ok"}


app.include_router(factura.router)
