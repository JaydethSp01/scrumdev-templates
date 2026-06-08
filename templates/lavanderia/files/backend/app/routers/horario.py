from fastapi import APIRouter, HTTPException
from typing import List
from models import Horario, HorarioCreate, HorarioUpdate
from database import db_session

router = APIRouter()

@router.get("/horarios", response_model=List[Horario])
async def read_horarios():
    horarios = db_session.query(Horario).all()
    return horarios

@router.post("/horarios", response_model=Horario)
async def create_horario(horario: HorarioCreate):
    db_horario = Horario(**horario.dict())
    db_session.add(db_horario)
    db_session.commit()
    db_session.refresh(db_horario)
    return db_horario

@router.put("/horarios/{horario_id}", response_model=Horario)
async def update_horario(horario_id: int, horario: HorarioUpdate):
    db_horario = db_session.query(Horario).filter(Horario.id == horario_id).first()
    if not db_horario:
        raise HTTPException(status_code=404, detail="Horario not found")
    for key, value in horario.dict().items():
        setattr(db_horario, key, value)
    db_session.commit()
    db_session.refresh(db_horario)
    return db_horario

@router.delete("/horarios/{horario_id}")
async def delete_horario(horario_id: int):
    db_horario = db_session.query(Horario).filter(Horario.id == horario_id).first()
    if not db_horario:
        raise HTTPException(status_code=404, detail="Horario not found")
    db_session.delete(db_horario)
    db_session.commit()
    return {"detail": "Horario deleted"}
