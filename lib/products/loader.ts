import type { ProductConfig } from "./types";
import type { Product } from "@/types/product";

/**
 * 产品数据加载器
 *
 * 使用说明：
 * 1. 在 PRODUCT_SLUGS 中添加产品 slug（文件夹名称，大写）
 * 2. 在 public/images/products/{SLUG}/product.json 中配置产品信息
 * 3. 图片文件放在同一目录下，在 JSON 中配置图片路径
 */

// 产品目录列表 (按此顺序展示)
const PRODUCT_SLUGS = ["A20", "A30", "A40", "Mate10", "Mate20"] as const;

// 预导入所有产品配置 (Next.js 需要静态路径)
const productConfigs: Record<string, ProductConfig> = {
  A20: require("../../public/images/products/A20/product.json"),
  A30: require("../../public/images/products/A30/product.json"),
  A40: require("../../public/images/products/A40/product.json"),
  Mate10: require("../../public/images/products/Mate10/product.json"),
  Mate20: require("../../public/images/products/Mate20/product.json"),
};

/**
 * 生成默认主图路径
 */
function generateDefaultImages(slug: string): string[] {
  const imageDir = `/images/products/${slug}`;

  // 特殊处理 Mate10 (使用 png)
  if (slug === "Mate10") {
    return [`${imageDir}/1.png`, `${imageDir}/2.png`];
  }

  // 特殊处理 Mate20 (特殊命名)
  if (slug === "Mate20") {
    return [`${imageDir}/hei1.png`, `${imageDir}/jin1.png`, `${imageDir}/hei2.png`];
  }

  // 默认使用 1.jpg, 2.jpg, 3.jpg
  return [`${imageDir}/1.jpg`, `${imageDir}/2.jpg`, `${imageDir}/3.jpg`];
}

/**
 * 生成默认详情图路径
 */
function generateDefaultDetailImages(slug: string): string[] {
  const imageDir = `/images/products/${slug}`;
  const detailImages: string[] = [];

  // 特殊处理 Mate10
  if (slug === "Mate10") {
    for (let i = 3; i <= 11; i++) {
      detailImages.push(`${imageDir}/${i}.${i <= 3 ? "png" : "jpg"}`);
    }
    return detailImages;
  }

  // 特殊处理 Mate20
  if (slug === "Mate20") {
    for (let i = 1; i <= 11; i++) {
      detailImages.push(`${imageDir}/${i}.jpg`);
    }
    return detailImages;
  }

  // 默认使用 4.jpg - 12.jpg
  for (let i = 4; i <= 12; i++) {
    detailImages.push(`${imageDir}/${i}.jpg`);
  }
  return detailImages;
}

/**
 * 将 ProductConfig 转换为 Product
 */
function configToProduct(slug: string): Product {
  const config = productConfigs[slug];

  if (!config) {
    throw new Error(`Product config not found for ${slug}`);
  }

  // 如果 JSON 中没有配置图片，使用默认生成
  const images = config.images && config.images.length > 0
    ? config.images
    : generateDefaultImages(slug);

  const detailImages = config.detailImages && config.detailImages.length > 0
    ? config.detailImages
    : generateDefaultDetailImages(slug);

  return {
    slug: config.slug,
    name: config.name,
    series: config.series,
    tagline: config.tagline,
    price: config.price,
    images,
    detailImages,
    specifications: config.specifications as Product["specifications"],
    features: config.features as Product["features"],
    isFeatured: config.isFeatured,
    isNew: config.isNew,
    video: config.video,
  };
}

/**
 * 获取所有已发布的产品
 */
export function loadAllProducts(): Product[] {
  const products: Product[] = [];

  for (const slug of PRODUCT_SLUGS) {
    const config = productConfigs[slug];
    if (config && config.published) {
      products.push(configToProduct(slug));
    }
  }

  return products;
}

/**
 * 根据 slug 获取产品
 */
export function loadProductBySlug(slug: string): Product | undefined {
  // 转换为大写匹配文件夹名称
  const folderSlug = slug.toUpperCase();
  const targetSlug = PRODUCT_SLUGS.find(s => s.toLowerCase() === folderSlug.toLowerCase());

  if (!targetSlug) {
    return undefined;
  }

  const config = productConfigs[targetSlug];
  if (config && config.published) {
    return configToProduct(targetSlug);
  }

  return undefined;
}

/**
 * 获取主打产品
 */
export function loadFeaturedProducts(): Product[] {
  return loadAllProducts().filter((p) => p.isFeatured);
}

/**
 * 获取新品
 */
export function loadNewProducts(): Product[] {
  return loadAllProducts().filter((p) => p.isNew);
}

/**
 * 获取所有产品（包括未发布的，用于管理后台）
 */
export function loadAllProductsIncludingUnpublished(): Product[] {
  return PRODUCT_SLUGS.map(slug => configToProduct(slug));
}
