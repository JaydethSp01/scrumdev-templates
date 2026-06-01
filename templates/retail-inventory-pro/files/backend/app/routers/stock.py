from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

class Stock(BaseModel):
    id: int
    producto: str
    talla: str
    cantidad: int

stocks_db = [
    Stock(id=1, producto="Camisa", talla="M", cantidad=15),
    Stock(id=2, producto="Pantalón", talla="L", cantidad=10),
]

@router.get("/stock", response_model=List[Stock])
async def get_stocks():
    return stocks_db

@router.post("/stock", response_model=Stock)
async def create_stock(stock: Stock):
    stocks_db.append(stock)
    return stock

@router.put("/stock/{stock_id}", response_model=Stock)
async def update_stock(stock_id: int, stock: Stock):
    for idx, s in enumerate(stocks_db):
        if s.id == stock_id:
            stocks_db[idx] = stock
            return stock
    raise HTTPException(status_code=404, detail="Stock no encontrado")

@router.delete("/stock/{stock_id}")
async def delete_stock(stock_id: int):
    for idx, s in enumerate(stocks_db):
        if s.id == stock_id:
            del stocks_db[idx]
            return {"message": "Stock eliminado"}
    raise HTTPException(status_code=404, detail="Stock no encontrado")
