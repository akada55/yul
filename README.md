# yul

一个轻量的前后端分离项目空架构：React + Vite 前端、Express + TypeScript 后端。

## 环境要求

- Node.js 20+
- npm 10+

## 开始使用

```bash
npm install
npm run dev
```

前端默认运行在 <http://localhost:5173>，后端运行在 <http://localhost:3000>。

后端健康检查：<http://localhost:3000/api/health>

## 项目结构

```text
.
├── backend/   # Express API
└── frontend/  # React 应用
```

## 常用命令

```bash
npm run dev       # 同时启动前后端
npm run build     # 构建前后端
npm run dev:api   # 仅启动后端
npm run dev:web   # 仅启动前端
```
