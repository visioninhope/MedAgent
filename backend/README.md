```
📦 MedAgent 
├── 📁 backend       
│   ├── 📁 src      
│   ├── pyproject.toml
│   └── app.py          
├── ...   
└── README.md             
```

## Conda env

Create conda environment and install dependencies
```
conda create --name deepsc python=3.10
conda activate medagent
pip install -e .
uvicorn app.main:app --reload
```