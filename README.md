# yul

一个可直接开始接入业务接口的前后端分离项目骨架：React + Vite + TypeScript 前端、Express + TypeScript 后端。已包含统一 API 请求层、版本化 API 路由、错误响应、环境变量配置和本地代理。

## 环境要求

- Node.js 20+
- npm 10+

## 启动

```bash
npm install
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
npm run dev
```

- 前端：<http://localhost:5173>
- 后端健康检查：<http://localhost:3000/api/health>
- 版本化健康检查：<http://localhost:3000/api/v1/health>

前端 `/api` 请求由 Vite 代理到后端。无需在浏览器端写死后端地址。

## 目录结构

```text
.
├── backend/
│   └── src/
│       ├── config/       # 环境变量和应用配置
│       ├── middleware/   # 请求 ID、404 和统一错误处理
│       ├── routes/       # API 路由
│       ├── app.ts        # Express 应用装配
│       └── index.ts      # 服务启动入口
└── frontend/
    └── src/
        ├── api/          # 通用 HTTP 客户端
        ├── features/     # 按业务领域组织接口和页面
        ├── App.tsx       # 应用入口组件
        └── main.tsx      # React 挂载入口
```

## 添加后端接口

在 `backend/src/routes/` 新建路由模块，并在 `backend/src/routes/index.ts` 注册。接口统一挂在 `/api/v1` 下；例如 `GET /api/v1/users`。业务复杂后可继续按 `features/<领域>/routes|service|schema` 拆分。

成功响应可直接返回 JSON。错误响应统一为：

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Resource not found"
  }
}
```

## 添加前端接口

在 `frontend/src/features/<领域>/api.ts` 中使用 `api` 客户端封装领域接口，再由组件调用。客户端统一处理 JSON、网络错误、HTTP 错误及 `ApiError`，并支持通过 `VITE_API_BASE_URL` 配置 API 前缀。

## 常用命令

```bash
npm run dev       # 同时启动前后端
npm run dev:api   # 仅启动后端
npm run dev:web   # 仅启动前端
npm run build     # 构建前后端
```

环境变量示例见 `backend/.env.example` 和 `frontend/.env.example`。
