// 重新导出类型和加载器
export {
  loadAllProducts,
  loadProductBySlug,
  loadFeaturedProducts,
  loadNewProducts,
  loadAllProductsIncludingUnpublished
} from "./loader";

export type { ProductConfig, ProductFeature, SpecificationCategory, ProductFeatureIcon } from "./types";
export type { Product } from "@/types/product";

// 兼容旧代码的辅助函数 (使用新加载器)
import * as loader from "./loader";
import type { Product } from "@/types/product";

/**
 * @deprecated 使用 loadProductBySlug 代替
 */
export function getProductBySlug(slug: string): Product | undefined {
  return loader.loadProductBySlug(slug);
}

/**
 * @deprecated 使用 loadFeaturedProducts 代替
 */
export function getFeaturedProducts(): Product[] {
  return loader.loadFeaturedProducts();
}

/**
 * @deprecated 使用 loadNewProducts 代替
 */
export function getNewProducts(): Product[] {
  return loader.loadNewProducts();
}

/**
 * @deprecated 使用 loadAllProducts 代替
 */
export function getAllProducts(): Product[] {
  return loader.loadAllProducts();
}
