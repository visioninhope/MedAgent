# Frontend

## Project structure
```
📦 MedAgent
├── 📁 frontend     
│   ├── 📁 public  
│   └── 📁 src 
│       └── 📁 app 
│       │   └── 📁 component
│       │   └── 📁 chat         
│       │   └── 📁 studio     
│       │   └── 📁 dashboard     
│       │   └── layout.tsx   
│       │   └── page.tsx 
│       ├── next.config.ts       
│       └── package.json  
├── ...   
└── README.md             
```


## User Interface (UI)

1. 顶部导航（Nav）

建议放置最核心、最常用或与角色强相关的入口。比如：

- Home / 首页
  - 返回系统首页，或显示概览信息。
- Chat / 问答
  - 医生角色主要使用的功能，方便快速进入问答界面。
- Studio（仅开发者可见）
  - 开发者的工作区域，比如管理 RAG Pipeline、调试 Agent 流程等。
- Dashboard（仅管理员可见）
  - 管理员的工作区域，比如查看系统指标、管理用户、分配权限等。
- 登录 / 个人中心
  - 当用户未登录时显示“登录”；登录后可变为头像或“个人中心”，可下拉显示个人信息、退出登录等选项。

2. 侧边栏（Sidebar）
   
侧边栏可以根据当前页面或当前角色，列出更细化的功能菜单。也可以做成多级菜单（submenu）。下面给出几个示例思路：

-  以「医生 (User)」角色为例
   -  我的问答
      -  「当前会话」：显示当前聊天对话
      -  「历史记录」：查看以往的问答记录
   -  指南查询
      -  「快速检索」：通过关键词、疾病名称等检索
      -  「收藏的指南」：医生收藏或常用的指南
   - 个人中心
     -   「我的信息」：医生的个人信息、科室、医院等
     -   「设置」：比如通知、偏好等

- 以「开发者 (Developer)」角色为例
  - RAG Pipeline 管理
    - 「知识库管理」：如 Elastic、Weaviate、Neo4j 的配置
    - 「Agent 编排」：查看和配置 LLM + 工具的工作流程
  - 调试 / 测试
    - 「单测 / 测试用例」：查看或编写测试用例
    - 「调试日志」：查看运行日志
  - 系统监控
    - 「API 监控」：查看接口请求量、错误日志
    - 「模型负载」：查看 LLM 使用情况

- 以「管理员 (Admin)」角色为例
  - 用户管理
    - 「用户列表」：查看/搜索所有用户
    - 「角色 & 权限」：分配角色（医生、开发者、管理员等）
  - 系统配置
    - 「Keycloak / 认证配置」：对接或修改认证相关设置
    - 「数据库连接」：管理数据库（Postgres、Elastic、Weaviate、Neo4j）的连接信息
  - 监控 & 报表
    - 「系统日志」：查看系统日志、审计日志
    - 「使用统计」：查看访问量、问答量等数据报表

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.