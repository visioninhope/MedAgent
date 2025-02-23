# src/app/crud/user.py
from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas.user import UserCreate
from app.core.security import get_password_hash

def create_user(db: Session, user: UserCreate, role: str = "user", is_confirmed: bool = True):
    hashed_password = get_password_hash(user.password) if user.password else ""
    db_user = User(
        email=user.email,
        username=user.username,
        name=user.name,
        hashed_password=hashed_password,
        role=role,
        is_confirmed=is_confirmed
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()
