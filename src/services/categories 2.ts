import { supabase } from './supabase';

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  icon: string;
  metadata: {
    gallery?: string[];
    featured?: boolean;
    max_height?: string;
    certifications?: string[];
  } | null;
  url: {
    api?: string;
    web?: string;
  };
  is_active: boolean;
  seo_title: string;
  seo_description: string;
}

// Enhanced image validation
export const isValidImageUrl = (url: string | undefined): boolean => {
  if (!url || url.trim() === '') return false;
  return url.startsWith('https://');
};

// Get fallback image based on icon type
export const getFallbackImage = (icon: string): string => {
  const DEFAULT_IMAGES = {
    'scaffold-icon': '/assets/images/categories/andamios-default.jpg',
    'multi-scaffold-icon': '/assets/images/categories/andamios-multidireccionales-default.jpg',
    default: '/assets/images/categories/default.jpg'
  };
  
  return DEFAULT_IMAGES[icon as keyof typeof DEFAULT_IMAGES] || DEFAULT_IMAGES.default;
};

export const categoryService = {
  async getCategories(): Promise<Category[]> {
    try {
      const { data, error } = await supabase.rpc('get_categories');

      if (error) {
        throw error;
      }

      if (!data || !Array.isArray(data)) {
        throw new Error('Invalid data format received');
      }

      // Filter active categories and those with valid API URLs
      return data.filter((category: Category) => 
        category.is_active && 
        category.url?.api && 
        !category.url.api.includes('http')
      );
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }
}; 