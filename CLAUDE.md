# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此代码库中工作提供指引。

## 项目概述

SmartLock 是一个高端智能锁电商网站，基于 Next.js 15 和 React 19 构建。展示智能锁产品线的功能、规格和品牌理念。

## 命令

```bash
npm run dev     # 启动开发服务器 (localhost:3000)
npm run build   # 生产构建
npm run start   # 启动生产服务器
npm run lint    # 运行 ESLint
```

## 架构

**框架:** Next.js 15.2.4 + App Router
**样式:** Tailwind CSS v4，使用自定义 CSS 变量进行主题配置
**UI 库:** shadcn/ui 组件 (Button, Card, Input, Badge)
**动画:** framer-motion 用于页面过渡和微交互
**图标:** lucide-react

### 目录结构

- `app/` - Next.js App Router 页面和全局样式
- `components/` - React 组件分类：
  - `components/ui/` - 可复用的 shadcn/ui 基础组件
  - `components/layout/` - 布局组件 (Header, Footer)
  - `components/home/` - 首页区块 (HeroSection, FeaturedProducts 等)
- `lib/` - 工具函数和数据：
  - `lib/utils.ts` - `cn()` 类名合并工具
  - `lib/products.ts` - 产品数据和辅助函数
- `types/` - TypeScript 类型定义

### 关键模式

- **路径别名:** `@/*` 映射到根目录 (在 `tsconfig.json` 中配置)
- **客户端组件:** 使用 hooks、framer-motion 或交互性的组件需添加 `"use client"` 指令
- **主题:** 默认暗色主题，CSS 变量定义在 `globals.css` 中；金色 (`#d4af37`) 作为主色调
- **产品数据:** 静态存储在 `lib/products.ts` 中，提供辅助函数 (`getProductBySlug`、`getFeaturedProducts` 等)

### TypeScript

- 启用严格模式
- 配置了 `@/*` 路径别名
