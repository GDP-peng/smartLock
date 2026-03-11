# 产品维护指南

## 快速开始

### 添加新产品

**4 个步骤完成新产品添加：**

1. **创建文件夹**
   ```bash
   mkdir public/images/products/X50
   ```

2. **添加产品图片**
   ```bash
   # 主图 (1-3 张)
   public/images/products/X50/1.jpg
   public/images/products/X50/2.jpg

   # 详情图 (多张)
   public/images/products/X50/4.jpg
   public/images/products/X50/5.jpg
   ```

3. **创建配置文件** - 复制现有产品的 JSON 修改即可
   ```bash
   cp public/images/products/A20/product.json public/images/products/X50/product.json
   ```
   然后修改 `slug`、`name`、`price` 等字段

4. **注册产品** - 编辑 `lib/products/loader.ts`，在 `PRODUCT_SLUGS` 数组中添加：
   ```typescript
   const PRODUCT_SLUGS = ["A20", "A30", "A40", "Mate10", "Mate20", "X50"] as const;
   ```

---

## 配置文件说明

### 必填字段

```json
{
  "slug": "x50",              // 产品标识，用于 URL /products/x50
  "name": "X50",              // 产品名称
  "series": "旗舰系列",         // 产品系列
  "tagline": "产品标语",       // 一句话描述
  "price": 1980,              // 价格（元）
  "published": true,          // 是否上架
  "isFeatured": true,         // 是否主打产品（首页推荐）
  "isNew": true,              // 是否新品（显示"新"标签）
  "features": [...],          // 产品特性（3-5 个）
  "specifications": [...]     // 产品规格（分类列表）
}
```

### 可选字段

```json
{
  "video": "/videos/x50.mp4",  // 产品视频路径
  "images": [...],             // 自定义主图列表
  "detailImages": [...]        // 自定义详情图列表
}
```

---

## 常见操作

### 下架产品

```json
{
  "slug": "x50",
  "published": false  // 设为 false 即可
}
```

### 修改价格

```json
{
  "slug": "x50",
  "price": 1780  // 直接修改数字
}
```

### 更新主打产品

```json
{
  "slug": "x50",
  "isFeatured": true  // 设为主打产品，首页会显示
}
```

### 移除新品标签

```json
{
  "slug": "x50",
  "isNew": false  // 设为 false 移除新品标签
}
```

---

## 文件结构

```
smartLock/
├── lib/products/
│   ├── loader.ts           ← 产品加载器，在此注册产品
│   ├── types.ts            ← 类型定义
│   ├── index.ts            ← API 导出
│   └── README.md           ← 详细文档
│
├── public/images/products/
│   ├── A20/
│   │   ├── product.json    ← 产品配置
│   │   ├── 1.jpg           ← 产品图片
│   │   └── ...
│   ├── A30/
│   ├── A40/
│   ├── Mate10/
│   └── Mate20/
```

---

## API 使用

在代码中获取产品数据：

```typescript
import { loadAllProducts, loadProductBySlug, loadFeaturedProducts } from "@/lib/products";

// 获取所有已发布的产品
const allProducts = loadAllProducts();

// 根据 slug 获取单个产品
const product = loadProductBySlug("x50");

// 获取主打产品
const featured = loadFeaturedProducts();

// 获取新品
const newProducts = loadNewProducts();
```

---

## 产品配置模板

```json
{
  "slug": "x50",
  "name": "X50",
  "series": "旗舰系列",
  "tagline": "3D 人脸识别 AI 智能锁 旗舰新品",
  "price": 1980,
  "published": true,
  "isFeatured": true,
  "isNew": true,
  "features": [
    {
      "icon": "face",
      "title": "3D 人脸识别",
      "description": "3D 结构光人脸识别技术，刷脸开锁，解放双手。"
    },
    {
      "icon": "scan",
      "title": "掌静脉识别",
      "description": "扫描手掌静脉血管图，安全系数更高。"
    },
    {
      "icon": "monitor",
      "title": "远程监控",
      "description": "APP 实时查看门锁状态，远程可视对讲。"
    }
  ],
  "specifications": [
    {
      "category": "安全性能",
      "specs": [
        { "name": "人脸识别", "value": "3D 结构光人脸识别" },
        { "name": "掌静脉识别", "value": "支持" },
        { "name": "指纹容量", "value": "100 枚" }
      ]
    },
    {
      "category": "智能功能",
      "specs": [
        { "name": "APP 控制", "value": "支持 iOS/Android" },
        { "name": "远程开锁", "value": "支持" }
      ]
    },
    {
      "category": "电源续航",
      "specs": [
        { "name": "电池类型", "value": "锂电池" },
        { "name": "续航时间", "value": "6-12 个月" }
      ]
    }
  ]
}
```

---

## 疑难解答

**Q: 产品详情页 404？**
- 检查 `slug` 是否正确（小写）
- 检查 `published` 是否为 `true`
- 检查 `lib/products/loader.ts` 中 `PRODUCT_SLUGS` 是否已注册

**Q: 图片不显示？**
- 检查图片路径是否正确（以 `/images/products/` 开头）
- 检查图片文件是否存在

**Q: 如何添加视频？**
- 将视频放入 `public/videos/` 目录
- 在配置中添加 `"video": "/videos/x50.mp4"`
