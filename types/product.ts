export interface Spec {
  name: string;
  value: string;
}

export interface SpecCategory {
  category: string;
  specs: Spec[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  series: string;
  tagline: string;
  price: number;
  images: string[];
  video?: string;
  detailImages: string[];
  specifications: SpecCategory[];
  features: Feature[];
  isFeatured: boolean;
  isNew: boolean;
}
