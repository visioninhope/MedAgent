# backend/app/routers/file_manager.py
import os
import os.path as osp
from typing import List

from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import FileResponse
from starlette.status import HTTP_201_CREATED

router = APIRouter()

# 文件存储目录（data 目录位于 backend 根目录下）
HERE = osp.dirname(osp.abspath(__file__))
BASE_DIR = osp.join(HERE, "..", "..", "..", "..")
FILE_DIR = osp.join(BASE_DIR, "data")
os.makedirs(FILE_DIR, exist_ok=True)

def get_file_path(filename: str) -> str:
    return osp.join(FILE_DIR, filename)

@router.get("/", response_model=List[str])
async def list_files():
    """
    列出所有 .pdf 文件名
    """
    files = [f for f in os.listdir(FILE_DIR) if f.endswith(('.pdf'))]
    return files

@router.post("/", status_code=HTTP_201_CREATED)
async def upload_file(file: UploadFile = File(...)):
    """
    上传一个 .owl/.rdf/.ttl 文件
    """
    if not file.filename.endswith(('.pdf')):
        raise HTTPException(status_code=400, detail="只允许上传 .pdf 文件")
    file_path = get_file_path(file.filename)
    with open(file_path, "wb") as f:
        content = await file.read()
        f.write(content)
    return {"filename": file.filename, "message": "上传成功"}

@router.get("/{filename}")
async def get_file(filename: str):
    """
    获取指定文件的文本内容，用于编辑
    """
    file_path = get_file_path(filename)
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="文件不存在")
    return FileResponse(file_path, media_type="application/octet-stream", filename=filename)

@router.put("/{filename}")
async def update_file(filename: str, content: str = None):
    """
    更新指定文件的内容
    """
    file_path = get_file_path(filename)
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="文件不存在")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content or "")
    return {"message": "更新成功", "filename": filename}

@router.delete("/{filename}")
async def delete_file(filename: str):
    """
    删除指定文件
    """
    file_path = get_file_path(filename)
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="文件不存在")
    os.remove(file_path)
    return {"message": "删除成功", "filename": filename}