from pydantic import BaseModel

class Product(BaseModel):
    id: int
    name: str
    price: float
    category_id: int
    provider_id: int

class Category(BaseModel):
    id: int
    name: str

class Supplier(BaseModel):
    id: int
    name: str

class Stock(BaseModel):
    product_id: int
    size: str
    quantity: int

class User(BaseModel):
    id: int
    username: str
    role: str
