import type { Product } from "@/types/product";

export type ProductFeatureIcon = "face" | "scan" | "monitor" | "screen" | "palette" | "colors" | "fingerprint" | "lock" | "wifi" | "battery";

export interface ProductFeature {
  icon: ProductFeatureIcon;
  title: string;
  description: string;
}

export interface SpecItem {
  name: string;
  value: string;
}

export interface SpecificationCategory {
  category: string;
  specs: SpecItem[];
}

export interface ProductConfig {
  slug: string;
  name: string;
  series: string;
  tagline: string;
  price: number;
  published: boolean;    // 控制产品是否上架
  isFeatured: boolean;   // 是否为主打产品
  isNew: boolean;        // 是否为新品
  video?: string;        // 可选：产品视频路径
  features: ProductFeature[];
  specifications: SpecificationCategory[];
  // 以下字段由系统自动生成
  images: string[];
  detailImages: string[];
}

export type { Product };
