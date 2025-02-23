# src/app/api/routes/keycloak_callback.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.user import UserCreate
from app.crud.user import create_user, get_user_by_email

router = APIRouter()

@router.get("/keycloak")
def keycloak_callback(code: str, db: Session = Depends(get_db)):
    # TODO: 根据 code 调用 Keycloak API 获取用户信息
    # 此处为示例数据，实际实现时请使用 OAuth2 流程与 Keycloak 交互
    user_info = {
        "email": "user@example.com",
        "username": "user123",
        "name": "User Name"
    }
    db_user = get_user_by_email(db, user_info["email"])
    if not db_user:
        # 首次 OAuth2 登录，创建用户，并将 is_confirmed 设置为 False
        user_data = UserCreate(
            email=user_info["email"],
            username=user_info["username"],
            name=user_info["name"],
            password=""  # OAuth2 用户无本地密码
        )
        new_user = create_user(db, user_data, is_confirmed=False)
        return {"message": "用户创建成功，请等待管理员确认", "user": new_user}
    else:
        return {"message": "用户登录成功", "user": db_user}
