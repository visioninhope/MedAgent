#!/bin/bash

# 检查是否安装了必要的工具
command -v conda >/dev/null 2>&1 || { echo "需要安装 conda 但未找到，请先安装 conda"; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "需要安装 npm 但未找到，请先安装 Node.js 和 npm"; exit 1; }

# 激活 conda 环境
echo "正在激活 conda 环境..."
source "$(conda info --base)/etc/profile.d/conda.sh"
conda activate medagent || {
    echo "conda 环境 'medagent' 不存在，正在创建..."
    conda create --name medagent python=3.10 -y
    conda activate medagent
}

# 启动后端服务
echo "正在启动后端服务..."
cd backend
pip install -e . >/dev/null 2>&1
python -m uvicorn app.main:app --reload &
BACKEND_PID=$!

# 启动前端服务
echo "正在启动前端服务..."
cd ../frontend
npm install >/dev/null 2>&1
npm run dev &
FRONTEND_PID=$!

echo "服务已启动:"
echo "后端运行在 http://127.0.0.1:8000"
echo "前端运行在 http://localhost:3000"
echo "按 Ctrl+C 停止所有服务"

# 等待用户中断
wait

# 清理进程
kill $BACKEND_PID $FRONTEND_PID 2>/dev/null 