# src/app/db/base.py
# 导入所有数据库模型，便于 Alembic 自动发现模型
from app.api.models.user import Base  # 后续如果有更多模型，请在此导入
