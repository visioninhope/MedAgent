# src/app/main.py
from fastapi import FastAPI
from app.api.routes import auth, keycloak_callback, users

app = FastAPI(title="用户注册与认证系统")

# 注册各模块的路由
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(keycloak_callback.router, prefix="/auth", tags=["keycloak"])
app.include_router(users.router, prefix="/users", tags=["users"])

@app.get("/")
def read_root():
    return {"message": "欢迎使用后端 API"}
