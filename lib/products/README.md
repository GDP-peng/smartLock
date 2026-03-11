# 产品配置系统使用说明

## 目录结构

```
smartLock/
├── public/images/products/
│   ├── A20/
│   │   ├── product.json      ← 产品配置文件
│   │   ├── 1.jpg             ← 产品图片
│   │   ├── 2.jpg
│   │   └── ...
│   ├── A30/
│   │   ├── product.json
│   │   └── ...
│   └── ...
└── lib/products/
    ├── index.ts              ← 导出 API
    ├── loader.ts             ← 产品加载器
    └── types.ts              ← TypeScript 类型定义
```

## 添加新产品

### 步骤 1：创建产品文件夹

在 `public/images/products/` 目录下创建新产品文件夹，文件夹名称为产品型号（大写）：

```bash
mkdir public/images/products/X50
```

### 步骤 2：添加产品图片

将产品图片放入文件夹中：

```bash
# 主图（3 张以内）
public/images/products/X50/1.jpg
public/images/products/X50/2.jpg
public/images/products/X50/3.jpg

# 详情图（多张）
public/images/products/X50/4.jpg
public/images/products/X50/5.jpg
...
```

### 步骤 3：创建产品配置文件

创建 `public/images/products/X50/product.json`：

```json
{
  "slug": "x50",
  "name": "X50",
  "series": "全新系列",
  "tagline": "产品标语，一句话描述产品亮点",
  "price": 1980,
  "published": true,
  "isFeatured": true,
  "isNew": true,
  "video": "/videos/x50.mp4",
  "images": [
    "/images/products/X50/1.jpg",
    "/images/products/X50/2.jpg",
    "/images/products/X50/3.jpg"
  ],
  "detailImages": [
    "/images/products/X50/1.jpg",
    "/images/products/X50/2.jpg",
    "/images/products/X50/3.jpg",
    "/images/products/X50/4.jpg",
    "/images/products/X50/5.jpg"
  ],
  "features": [
    {
      "icon": "face",
      "title": "功能名称",
      "description": "功能描述"
    }
  ],
  "specifications": [
    {
      "category": "安全性能",
      "specs": [
        { "name": "规格名称", "value": "规格值" }
      ]
    }
  ]
}
```

### 步骤 4：注册产品

在 `lib/products/loader.ts` 的 `PRODUCT_SLUGS` 数组中添加产品 slug（文件夹名称）：

```typescript
const PRODUCT_SLUGS = ["A20", "A30", "A40", "Mate10", "Mate20", "X50"] as const;
```

完成！访问 `/products/x50` 即可查看新产品详情页。

---

## 配置文件字段说明

### 必填字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `slug` | string | 产品唯一标识，用于 URL（如 `/products/x50`） |
| `name` | string | 产品名称 |
| `series` | string | 产品系列（如 "AI 智能系列"） |
| `tagline` | string | 产品标语，一句话描述 |
| `price` | number | 产品价格（人民币） |
| `published` | boolean | 是否上架销售 |
| `isFeatured` | boolean | 是否为主打产品（首页推荐） |
| `isNew` | boolean | 是否为新品（显示"新"标签） |
| `features` | Feature[] | 产品特性列表 |
| `specifications` | Spec[] | 产品规格列表 |

### 可选字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `video` | string | 产品视频路径（如 `/videos/x50.mp4`） |
| `images` | string[] | 主图列表，默认使用 1.jpg, 2.jpg, 3.jpg |
| `detailImages` | string[] | 详情图列表 |

### Feature 图标类型

可选值：`"face"`, `"scan"`, `"monitor"`, `"screen"`, `"palette"`, `"colors"`, `"fingerprint"`, `"lock"`, `"wifi"`, `"battery"`

---

## 修改产品

### 下架产品

将 `published` 设置为 `false`：

```json
{
  "slug": "x50",
  "published": false
}
```

### 修改价格

直接修改 `price` 字段：

```json
{
  "slug": "x50",
  "price": 1780
}
```

### 更新图片

修改 `images` 或 `detailImages` 数组：

```json
{
  "images": [
    "/images/products/X50/new-1.jpg",
    "/images/products/X50/new-2.jpg"
  ]
}
```

---

## API 使用

### 在代码中获取产品数据

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

## 常见问题

### Q: 如何批量修改多个产品的公共字段？

目前没有批量修改功能，建议逐个修改 JSON 文件。可以使用文本编辑器的"多文件搜索替换"功能。

### Q: 产品图片支持哪些格式？

支持 `.jpg`, `.png`, `.webp` 等 Next.js Image 组件支持的格式。

### Q: 如何让新品标签消失？

将 `isNew` 设置为 `false`：

```json
{
  "slug": "x50",
  "isNew": false
}
```

### Q: 产品详情页 404 怎么办？

1. 检查 `slug` 是否正确（小写）
2. 检查 `published` 是否为 `true`
3. 检查 `PRODUCT_SLUGS` 是否已注册

### Q: 如何添加视频？

1. 将视频文件放入 `public/videos/` 目录
2. 在配置文件中添加 `video` 字段：
   ```json
   {
     "video": "/videos/x50.mp4"
   }
   ```

---

## 最佳实践

1. **图片命名规范**：使用 `1.jpg`, `2.jpg` 等数字命名，便于管理
2. **slug 命名**：使用小写字母 + 数字，如 `x50`, `mate20`
3. **价格单位**：统一使用人民币（元），不带小数
4. **特性数量**：建议 3-5 个特性，太多会显得杂乱
5. **规格分类**：按逻辑分组，如"安全性能"、"智能功能"、"电源续航"等
