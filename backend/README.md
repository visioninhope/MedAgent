# MedAgent Backend

## 项目结构
```
📦 MedAgent 
├── 📁 backend       # 后端项目根目录
│   ├── 📁 src      # 源代码目录
│   ├── pyproject.toml  # 项目依赖配置
│   ├── app.py      # 应用入口
│   └── README.md   # 项目说明文档
├── ...   
└── README.md       # 主项目说明文档
```

## 环境配置

### 前置要求
- Python 3.10 或更高版本
- Conda 包管理器

### 安装步骤
1. 创建并激活 Conda 环境
```bash
# 创建环境
conda create --name medagent python=3.10

# 激活环境
conda activate medagent

# 安装依赖
pip install -e .
```

2. 启动服务
```bash
# 开发模式启动（支持热重载）
python -m uvicorn app.main:app --reload
```

## API 文档

### 概述
- 基础 URL: `http://127.0.0.1:8000/api/knowledge/pdf/`




### API 端点说明

#### 1. 列出所有 PDF 文件
```http
GET /api/knowledge/pdf/
```

**响应示例：**
```json
["file1.pdf", "file2.pdf"]
```

**curl 示例：**
```bash
curl http://127.0.0.1:8000/api/knowledge/pdf/
```


### 注意事项
1. 文件存储
   - 所有 PDF 文件存储在后端的 `data` 目录中
   - 目录会在服务启动时自动创建

2. 文件限制
   - 仅支持 `.pdf` 格式文件
   - 文件名不应包含特殊字符
   - 建议使用英文文件名

