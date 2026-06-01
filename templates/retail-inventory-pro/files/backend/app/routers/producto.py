from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

class Producto(BaseModel):
    id: int
    nombre: str
    precio: float
    categoria: str

productos_db = [
    Producto(id=1, nombre="Camisa", precio=29.99, categoria="Ropa"),
    Producto(id=2, nombre="Pantalón", precio=49.99, categoria="Ropa"),
]

@router.get("/producto", response_model=List[Producto])
async def get_productos():
    return productos_db

@router.post("/producto", response_model=Producto)
async def create_producto(producto: Producto):
    productos_db.append(producto)
    return producto

@router.put("/producto/{producto_id}", response_model=Producto)
async def update_producto(producto_id: int, producto: Producto):
    for idx, p in enumerate(productos_db):
        if p.id == producto_id:
            productos_db[idx] = producto
            return producto
    raise HTTPException(status_code=404, detail="Producto no encontrado")

@router.delete("/producto/{producto_id}")
async def delete_producto(producto_id: int):
    for idx, p in enumerate(productos_db):
        if p.id == producto_id:
            del productos_db[idx]
            return {"message": "Producto eliminado"}
    raise HTTPException(status_code=404, detail="Producto no encontrado")
