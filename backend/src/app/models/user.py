# src/app/api/models/user.py
from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    username = Column(String, unique=True, index=True, nullable=False)
    name = Column(String, nullable=True)
    hashed_password = Column(String, nullable=True)  # 本地注册用户使用
    role = Column(String, default="user")
    is_active = Column(Boolean, default=True)
    # OAuth2 用户首次登录后默认 is_confirmed 为 False，由管理员确认后置为 True
    is_confirmed = Column(Boolean, default=True)
