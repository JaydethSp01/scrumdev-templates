from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

class Talla(BaseModel):
    id: int
    talla: str

tallas_db = [
    Talla(id=1, talla="S"),
    Talla(id=2, talla="M"),
    Talla(id=3, talla="L"),
]

@router.get("/talla", response_model=List[Talla])
async def get_tallas():
    return tallas_db

@router.post("/talla", response_model=Talla)
async def create_talla(talla: Talla):
    tallas_db.append(talla)
    return talla

@router.put("/talla/{talla_id}", response_model=Talla)
async def update_talla(talla_id: int, talla: Talla):
    for idx, t in enumerate(tallas_db):
        if t.id == talla_id:
            tallas_db[idx] = talla
            return talla
    raise HTTPException(status_code=404, detail="Talla no encontrada")

@router.delete("/talla/{talla_id}")
async def delete_talla(talla_id: int):
    for idx, t in enumerate(tallas_db):
        if t.id == talla_id:
            del tallas_db[idx]
            return {"message": "Talla eliminada"}
    raise HTTPException(status_code=404, detail="Talla no encontrada")
