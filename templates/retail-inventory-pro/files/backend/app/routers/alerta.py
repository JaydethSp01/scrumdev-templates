from fastapi import APIRouter
from typing import List
from pydantic import BaseModel

router = APIRouter()

class Alerta(BaseModel):
    id: int
    producto: str
    talla: str
    mensaje: str

alertas_db = [
    Alerta(id=1, producto="Camiseta", talla="M", mensaje="Stock bajo"),
    Alerta(id=2, producto="Pantalón", talla="L", mensaje="Stock bajo"),
]

@router.get("/alerta", response_model=List[Alerta])
def get_alertas():
    return alertas_db
