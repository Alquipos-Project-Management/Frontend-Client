export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  short_description?: string;
  category_id: string;
  sku?: string;
  price?: number;
  sale_price?: number;
  price_unit?: string;
  show_price: boolean;
  is_featured: boolean;
  is_active: boolean;
  is_rental: boolean;
  is_available: boolean;
  stock_quantity?: number;
  min_rental_period?: number;
  rental_period_unit?: string;
  display_order?: number;
  exta_information?: Record<string, any>;
  metadata?: Record<string, any>;
  attributes?: Record<string, any>;
  tags?: string[];
  seo_title?: string;
  seo_description?: string;
  created_at: string;
  updated_at: string;
  category?: Category;
  images?: ProductImage[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parent_id?: string;
  path?: string;
  level: number;
  is_active: boolean;
  display_order: number;
  icon?: string;
  url?: Record<string, any>;
  metadata?: Record<string, any>;
  seo_title?: string;
  seo_description?: string;
  created_at: string;
  updated_at: string;
  parent?: Category;
  children?: Category[];
}

export interface ProductImage {
  id: string;
  product_id: string;
  url: string;
  alt?: string;
  is_primary: boolean;
  display_order: number;
} 