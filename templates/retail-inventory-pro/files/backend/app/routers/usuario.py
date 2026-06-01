from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

class Usuario(BaseModel):
    id: int
    nombre: str
    email: str

usuarios_db = [
    Usuario(id=1, nombre="Juan Perez", email="juan.perez@example.com"),
    Usuario(id=2, nombre="Maria Lopez", email="maria.lopez@example.com"),
]

@router.get("/usuario", response_model=List[Usuario])
async def get_usuarios():
    return usuarios_db

@router.post("/usuario", response_model=Usuario)
async def create_usuario(usuario: Usuario):
    usuarios_db.append(usuario)
    return usuario

@router.put("/usuario/{usuario_id}", response_model=Usuario)
async def update_usuario(usuario_id: int, usuario: Usuario):
    for idx, u in enumerate(usuarios_db):
        if u.id == usuario_id:
            usuarios_db[idx] = usuario
            return usuario
    raise HTTPException(status_code=404, detail="Usuario no encontrado")

@router.delete("/usuario/{usuario_id}")
async def delete_usuario(usuario_id: int):
    for idx, u in enumerate(usuarios_db):
        if u.id == usuario_id:
            del usuarios_db[idx]
            return {"message": "Usuario eliminado"}
    raise HTTPException(status_code=404, detail="Usuario no encontrado")
