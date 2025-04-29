import { supabase } from './supabase';
import { CSSProperties } from 'react';

export interface NewsItem {
  id: string;
  slug: string;
  tags: string[];
  title: string;
  status: string;
  summary: string;
  created_at: string;
  is_featured: boolean;
  published_at: string | null;
  url?: {
    api: string;
    web: string;
  };
}

export interface NewsDetail extends NewsItem {
  content: string;
  metadata: Record<string, any>;
  author_id: string;
  is_active: boolean;
  updated_at: string;
  content_type: string;
  seo_metadata: {
    title: string;
    keywords: string;
    description: string;
  };
  display_order: number;
}

interface NewsResponse {
  success: boolean;
  message: string;
  data: {
    items: NewsItem[];
  };
}

interface NewsDetailResponse {
  success: boolean;
  message: string;
  data: NewsDetail;
}

const handleSupabaseError = (error: any) => {
  console.error('Supabase error:', error);
  throw new Error(error.message || 'Error al conectar con el servidor');
};

export const newsService = {
  getNewsList: async (): Promise<NewsItem[]> => {
    try {
      // First try to get the list
      const { data, error } = await supabase.rpc('rpc_news_list');

      if (error) {
        handleSupabaseError(error);
      }

      if (!data || !Array.isArray(data) || data.length === 0) {
        return [];
      }

      const response = data[0] as NewsResponse;
      
      if (!response.success) {
        throw new Error(response.message || 'Error al obtener las noticias');
      }

      const items = response.data.items || [];

      // Then fetch details for each item to ensure we have all data
      const detailedItems = await Promise.all(
        items.map(async (item) => {
          try {
            const detail = await newsService.getNewsDetail(item.id);
            return {
              ...item,
              ...detail
            };
          } catch (error) {
            console.error(`Error fetching detail for news ${item.id}:`, error);
            return item; // Return the basic item if detail fetch fails
          }
        })
      );

      return detailedItems;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  },

  getNewsDetail: async (id: string): Promise<NewsDetail> => {
    try {
      const { data, error } = await supabase.rpc('rpc_news_get', {
        p_id: id
      });

      if (error) {
        handleSupabaseError(error);
      }

      if (!data || !Array.isArray(data) || data.length === 0) {
        throw new Error('Noticia no encontrada');
      }

      const response = data[0] as NewsDetailResponse;
      
      if (!response.success) {
        throw new Error(response.message || 'Error al obtener la noticia');
      }

      return response.data;
    } catch (error) {
      console.error('Error fetching news detail:', error);
      throw error;
    }
  },

  // Helper function to get image URL
  getImageUrl: (item: NewsItem): string => {
    // First try to get the API URL
    if (item.url?.api) {
      return item.url.api;
    }
    // Then try the web URL
    if (item.url?.web) {
      return item.url.web;
    }
    // Fallback to default image
    return '/large-hydraulic-excavator-cat-6030-caterpillar.jpg';
  },

  // Helper function to get image dimensions
  getImageDimensions: (item: NewsItem): { width: number; height: number; style: CSSProperties } => {
    // Default dimensions for all news images to fit the card
    const baseStyle: CSSProperties = {
      objectFit: 'cover' as const,
      objectPosition: 'center',
      width: '100%',
      height: '100%',
    };

    return {
      width: 400, // Fixed width for all cards
      height: 250, // Fixed height for all cards
      style: baseStyle,
    };
  },

  // Helper function to check if image exists
  checkImageExists: async (url: string): Promise<boolean> => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch (error) {
      console.error('Error checking image:', error);
      return false;
    }
  }
}; 