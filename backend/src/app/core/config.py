# src/app/core/config.py
import os
from pathlib import Path

# BASE_DIR 指向项目根目录（backend 目录）
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# 数据库文件放在 data 目录下
DATABASE_URL = os.getenv("DATABASE_URL", f"sqlite:///{BASE_DIR / 'data' / 'database.db'}")

JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "your-secret-key")
JWT_ALGORITHM = "HS256"
JWT_EXPIRATION_MINUTES = 60 * 24  # 示例：1 天有效期
