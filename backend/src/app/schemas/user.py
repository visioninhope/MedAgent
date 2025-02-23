# src/app/schemas/user.py
from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    username: str
    name: str
    password: str

class UserOut(BaseModel):
    id: int
    email: EmailStr
    username: str
    name: str
    role: str
    is_active: bool
    is_confirmed: bool

    class Config:
        orm_mode = True
