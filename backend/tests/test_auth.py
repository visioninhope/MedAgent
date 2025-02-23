# tests/test_auth.py
import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.db.session import engine
from app.db.base import Base

@pytest.fixture(scope="module")
def test_client():
    # 测试前初始化数据库（创建所有表）
    Base.metadata.create_all(bind=engine)
    with TestClient(app) as client:
        yield client
    # 测试结束后销毁表结构（清理数据）
    Base.metadata.drop_all(bind=engine)

def test_sign_up(test_client):
    # 模拟注册请求的 payload
    payload = {
        "email": "test@example.com",
        "username": "testuser",
        "name": "Test User",
        "password": "password123"
    }
    response = test_client.post("/auth/sign-up", json=payload)
    assert response.status_code == 200, response.text
    data = response.json()
    assert data["email"] == payload["email"]
    assert data["username"] == payload["username"]
    assert data["name"] == payload["name"]
    assert data["role"] == "user"
    # 对于本地注册用户，is_confirmed 默认为 True

def test_sign_in_success(test_client):
    # 使用之前注册的用户进行登录
    params = {"email": "test@example.com", "password": "password123"}
    response = test_client.post("/auth/sign-in", params=params)
    assert response.status_code == 200, response.text
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"

def test_sign_in_failure(test_client):
    # 使用错误密码登录
    params = {"email": "test@example.com", "password": "wrongpassword"}
    response = test_client.post("/auth/sign-in", params=params)
    # 预期返回 400 状态码，提示邮箱或密码错误
    assert response.status_code == 400, response.text
    data = response.json()
    assert data["detail"] == "邮箱或密码错误"
