# Rebekey 丽贝卡智能锁官网 - 项目总结文档

## 项目概述

这是丽贝卡（Rebekey）智能锁品牌的官方网站，采用深色高端风格设计，展示各类智能锁产品的参数、性能和图片。

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| **Next.js** | 15.2.4 | App Router、SSR/SSG |
| **React** | 19.0.0 | 最新稳定版 |
| **TypeScript** | 5.8.2 | 类型安全 |
| **Tailwind CSS** | 3.x | 原子化 CSS、主题系统 |
| **Framer Motion** | 12.x | 流畅动画 |
| **shadcn/ui** | Latest | 可组合 UI 组件库 |

## 项目结构

```
smartLock/
├── app/
│   ├── page.tsx              # 首页
│   ├── layout.tsx            # 根布局（含 Header/Footer）
│   ├── globals.css           # 全局样式（深色主题）
│   ├── products/
│   │   ├── page.tsx          # 产品列表页
│   │   └── [slug]/page.tsx   # 产品详情页
│   ├── technology/page.tsx   # 技术亮点页
│   └── about/page.tsx        # 关于我们页
├── components/
│   ├── ui/                   # shadcn/ui 组件
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── input.tsx
│   ├── layout/               # 布局组件
│   │   ├── Header.tsx        # 导航栏（含 Logo）
│   │   └── Footer.tsx        # 页脚
│   ├── product/              # 产品组件
│   │   ├── ProductCard.tsx
│   │   ├── ProductGallery.tsx
│   │   ├── ProductSpecs.tsx
│   │   ├── ProductVideo.tsx
│   │   ├── ProductFeatures.tsx
│   │   └── ProductDetailImages.tsx
│   └── home/                 # 首页组件
│       ├── HeroSection.tsx
│       ├── FeaturedProducts.tsx
│       ├── TechnologyHighlights.tsx
│       └── BrandPhilosophy.tsx
├── lib/
│   ├── products.ts           # 产品数据
│   └── utils.ts              # 工具函数（cn）
├── types/
│   └── product.ts            # TypeScript 类型定义
├── public/
│   ├── images/
│   │   ├── logo/rebekey.png  # 品牌 Logo
│   │   └── products/         # 产品图片
│   │       ├── A20/
│   │       ├── A30/
│   │       ├── A40/
│   │       ├── Mate10/
│   │       └── Mate20/
│   └── videos/
│       └── mate20.mp4        # 产品视频
└── [配置文件]
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.js
    ├── postcss.config.js
    └── next.config.mjs
```

## 品牌信息

- **英文名称**: Rebekey
- **中文名称**: 丽贝卡
- **Logo 路径**: `/public/images/logo/rebekey.png`
- **主题色**: 深空灰 (#0A0A0B) + 香槟金 (#D4AF37)
- **网站语言**: 简体中文

## 产品列表

### 1. A20 - AI 智能系列
- **价格**: ¥1680
- **特点**: 3D 人脸识别、掌静脉识别、双屏显示
- **封面图**: `/images/products/A20/1.jpg`
- **详情图**: 12 张（1.jpg - 12.jpg）

### 2. A30 - AI 智能系列
- **价格**: ¥1880
- **特点**: 3D 人脸识别、掌静脉识别、AI 智能语音
- **封面图**: `/images/products/A30/1.jpg`
- **详情图**: 12 张（1.jpg - 12.jpg）

### 3. A40 - 高端定制系列
- **价格**: ¥2180
- **特点**: 大理石纹定制、双色把手盖
- **封面图**: `/images/products/A40/1.jpg`
- **详情图**: 11 张（1.jpg - 13.jpg，缺 6.jpg）

### 4. Mate 10 - 经典系列
- **价格**: ¥1380
- **特点**: 经典实用、4.5 英寸室内屏
- **封面图**: `/images/products/Mate10/1.png`
- **详情图**: 12 张（1.jpg - 12.jpg + 1.png, 2.png）

### 5. Mate 20 - 经典系列
- **价格**: ¥1480
- **特点**: 双色可选（磨砂黑/香槟金）
- **封面图**: `/images/products/Mate20/黑 1.png`
- **详情图**: 11 张（1.jpg - 11.jpg + 金/黑系列.png）
- **视频**: `/videos/mate20.mp4`

## 核心功能

### 首页组件
1. **HeroSection**: 全屏展示、品牌标语、CTA 按钮
2. **FeaturedProducts**: 热门产品卡片网格（3 列）
3. **TechnologyHighlights**: 6 大核心技术展示
4. **BrandPhilosophy**: 品牌理念、统计数据

### 产品详情页
1. **ProductGallery**: 产品图片画廊（带灯箱效果）
2. **ProductSpecs**: 参数规格表（分类展示）
3. **ProductFeatures**: 核心功能卡片（4 个）
4. **ProductVideo**: 视频播放器（仅 Mate20 有）
5. **ProductDetailImages**: 详情页长图滚动展示

### 布局组件
1. **Header**: 固定顶部导航、响应式汉堡菜单、Logo
2. **Footer**: 品牌信息、导航链接、社交媒体

## 主题配置

### 颜色变量 (globals.css)
```css
:root {
  --background: #0a0a0b;
  --foreground: #f5f5f5;
  --card: #121214;
  --card-foreground: #f5f5f5;
  --primary: #d4af37;
  --primary-foreground: #0a0a0b;
  --secondary: #27272a;
  --muted: #27272a;
  --muted-foreground: #a1a1aa;
  --border: #27272a;
  --input: #27272a;
  --ring: #d4af37;
}
```

### 工具类
- `.gradient-gold`: 香槟金渐变背景
- `.text-gradient-gold`: 香槟金渐变文字
- `.gradient-metallic`: 金属渐变背景
- `.glow`: 金色光晕阴影

## 开发命令

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 路由说明

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 | Hero + 产品 + 技术 + 品牌 |
| `/products` | 产品列表 | 全部产品展示 |
| `/products/[slug]` | 产品详情 | a20, a30, a40, mate10, mate20 |
| `/technology` | 技术亮点 | 6 大核心技术 + 发展历程 |
| `/about` | 关于我们 | 品牌信息 + 团队 |

## 产品数据结构

```typescript
interface Product {
  slug: string           // 产品标识（用于路由）
  name: string           // 产品名称
  series: string         // 产品系列
  tagline: string        // 产品标语
  price: number          // 价格（人民币）
  images: string[]       // 封面图片数组
  video?: string         // 视频路径（可选）
  detailImages?: string[] // 详情页图片数组
  specifications: SpecCategory[] // 规格参数
  features: Feature[]    // 核心功能
  isFeatured: boolean    // 是否热销
  isNew: boolean         // 是否新品
}
```

## 关键文件修改历史

### 布局文件
- `app/layout.tsx`: 根布局，设置语言为 zh-CN，引入 Header/Footer
- `components/layout/Header.tsx`: 使用 Logo 图片，中文导航
- `components/layout/Footer.tsx`: 品牌信息，中文链接

### 首页文件
- `app/page.tsx`: 首页入口
- `components/home/HeroSection.tsx`: 中文标语
- `components/home/FeaturedProducts.tsx`: 产品卡片
- `components/home/TechnologyHighlights.tsx`: 技术卡片
- `components/home/BrandPhilosophy.tsx`: 品牌理念

### 产品文件
- `lib/products.ts`: 5 款产品的完整数据
- `types/product.ts`: TypeScript 类型定义
- `components/product/*`: 所有产品相关组件

## 注意事项

1. **图片路径**: 所有产品图片位于 `/public/images/products/[型号]/` 目录
2. **图片格式**: Next.js Image 组件需要正确的图片格式，确保扩展名匹配
3. **响应式**: 所有组件都支持移动端，使用 Tailwind 的 sm/md/lg/xl 断点
4. **动画**: 使用 Framer Motion 的 `whileInView` 实现滚动触发
5. **SEO**: 每个页面都有独立的 metadata 配置

## 常用修改方式

### 添加新产品
1. 在 `public/images/products/` 创建新文件夹
2. 在 `lib/products.ts` 添加产品数据
3. 在 `types/product.ts` 确保类型定义完整

### 修改产品价格
- 编辑 `lib/products.ts` 中对应产品的 `price` 字段

### 修改导航菜单
- 编辑 `components/layout/Header.tsx` 中的 `navItems` 数组

### 修改页脚链接
- 编辑 `components/layout/Footer.tsx` 中的 `footerLinks` 对象

### 添加新页面
1. 在 `app/` 目录下创建新文件夹和 `page.tsx`
2. 在 `Header.tsx` 和 `Footer.tsx` 中添加导航链接
3. 在 `layout.tsx` 中确保 metadata 配置

## 部署建议

推荐部署到 Vercel：
```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

## 后续优化建议

1. 添加产品搜索和筛选功能
2. 添加购物车和结算流程
3. 添加用户评价系统
4. 添加在线客服功能
5. 优化图片加载（使用 Next.js Image 的 placeholder）
6. 添加 PWA 支持
7. 添加多语言支持（i18n）

---

**文档生成时间**: 2026-03-09
**项目版本**: 1.1.0
**最后更新**: 2026-03-10

---

## 开发日志 - 2026-03-10

### 环境配置
- ✅ 安装 Node.js 25.8.0（使用 Homebrew）
- ✅ 安装项目依赖 `npm install`
- ✅ 启动开发服务器 `npm run dev`（http://localhost:3000）

### Bug 修复

#### 1. Mate 10 产品详情页图片无法加载
**问题**: `detailImages` 使用 `.jpg` 扩展名，但实际文件是 `.png`
**修复**: 更新 `lib/products.ts` 中 Mate 10 的 `detailImages` 路径：
```typescript
// 修复前：1.jpg, 2.jpg, 3.jpg...
// 修复后：1.png, 2.png, 3.png, 4.jpg, 5.jpg...
```

#### 2. Mate 20 首页图片和视频无法加载
**问题 1**: 文件名包含中文（`黑 1.png`, `金 1.png`），Next.js 对中文文件名 URL 编码处理有问题
**修复 1**: 重命名文件为拼音命名
```bash
黑 1.png → hei1.png
黑 2.png → hei2.png
黑 3.png → hei3.png
金 1.png → jin1.png
金 2.png → jin2.png
金 3.png → jin3.png
```
**问题 2**: 视频文件不存在
**修复 2**: 从 `smart_info/mate20/` 复制 `介绍视频.mp4` 到 `public/videos/mate20.mp4`

#### 3. 产品中心黑屏 bug
**问题**: 多次进出产品中心页面时概率性黑屏
**原因**: `whileInView` 动画在快速导航时视图检测出错；图片加载失败时深色背景显示为黑色
**修复**: 更新 `components/product/ProductCard.tsx`
- 改用 `animate` 替代 `whileInView`
- 添加图片加载状态管理
- 添加 loading spinner
- 添加 `onError` 处理

#### 4. 产品视频播放问题
**问题**: 点击播放按钮无反应
**修复**: 更新 `components/product/ProductVideo.tsx`
- 改用 `motion.button` 替代 `motion.div`
- 添加 `videoRef` 手动控制播放
- 添加 `<source>` 标签指定视频类型

### 功能优化

#### 产品图库视频集成
**需求**: 视频单独展示太突兀，希望整合到图片画廊中
**实现**: 重构 `components/product/ProductGallery.tsx`
- 新增 `video` 参数支持
- 构建统一媒体列表（图片 + 视频）
- 视频在缩略图中显示为带"视频"标签的播放图标
- 主显示区支持切换图片/视频
- 添加左右箭头导航和计数器（如 4/4）
- 视频结束时自动停止

**文件变更**:
- `components/product/ProductGallery.tsx` - 重构
- `app/products/[slug]/page.tsx` - 移除独立 ProductVideo 组件
- `components/product/ProductVideo.tsx` - 保留但不再使用

### 部署配置

#### Vercel 部署
1. **安装 Vercel CLI**: `npm install -g vercel`
2. **登录**: `vercel login`
3. **添加配置**: 创建 `vercel.json`
```json
{
  "framework": "nextjs"
}
```
4. **部署命令**: `vercel --prod --yes`
5. **生产链接**: https://rebekey.vercel.app

#### Next.js 安全升级
**问题**: Vercel 检测到 CVE-2025-66478 安全漏洞
**修复**: 升级 Next.js 到最新版
```bash
npm install next@latest eslint-config-next@latest
```

#### GitHub 部署流程
1. 推送代码到 GitHub: `git push origin main`
2. 在 Vercel 官网导入 GitHub 仓库
3. 自动触发构建部署

### 当前状态
- ✅ 开发服务器正常运行
- ✅ 所有产品页面可正常访问
- ✅ Mate 20 视频播放正常
- ✅ 已部署到 Vercel（https://rebekey.vercel.app）
- ✅ 代码已推送到 GitHub（https://github.com/GDP-peng/smartLock）

### 文件变更清单
| 文件 | 修改内容 |
|------|----------|
| `lib/products.ts` | 修复 Mate10/Mate20 图片路径，恢复 Mate20 视频配置 |
| `components/product/ProductCard.tsx` | 添加图片加载状态，修复黑屏 bug |
| `components/product/ProductGallery.tsx` | 重构支持视频集成 |
| `components/product/ProductVideo.tsx` | 修复视频播放问题 |
| `app/products/[slug]/page.tsx` | 移除独立视频组件 |
| `public/images/products/Mate20/` | 重命名 PNG 文件为拼音 |
| `public/videos/mate20.mp4` | 新增视频文件 |
| `vercel.json` | 新增 Vercel 配置 |
| `package.json` | 升级 Next.js 到安全版本 |
