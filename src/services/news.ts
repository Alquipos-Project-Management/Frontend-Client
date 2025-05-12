'use client';

import supabase from './supabase-direct';
import { CSSProperties } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';

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

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const retryOperation = async <T>(operation: () => Promise<T>): Promise<T> => {
  let lastError: any;
  
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await operation();
    } catch (error) {
      console.warn(`Attempt ${attempt} failed, retrying...`, error);
      lastError = error;
      if (attempt < MAX_RETRIES) {
        await delay(RETRY_DELAY * attempt);
      }
    }
  }
  
  throw lastError || new Error('Operation failed after multiple retries');
};

export const newsService = {
  getNewsList: async (): Promise<NewsItem[]> => {
    return retryOperation(async () => {
      try {
        // Verificar que el cliente supabase existe
        if (!supabase) {
          console.error('Cliente Supabase no inicializado en servicio de noticias');
          throw new Error('Cliente Supabase no disponible');
        }
        
        console.log('Consultando lista de noticias con RPC');
        const { data, error } = await supabase.rpc('rpc_news_list');

        if (error) {
          console.error('Error fetching news list:', error);
          throw error;
        }

        if (!data || !Array.isArray(data) || data.length === 0) {
          console.warn('No se encontraron noticias');
          return [];
        }

        const response = data[0] as NewsResponse;
        
        if (!response.success) {
          console.error('News API response unsuccessful:', response.message);
          throw new Error(response.message);
        }

        const items = response.data.items || [];
        if (items.length === 0) {
          return [];
        }

        // Fetch details in parallel with error handling
        const detailedItems = await Promise.allSettled(
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

        // Filter out failed promises and get successful results
        return detailedItems
          .filter((result): result is PromiseFulfilledResult<NewsItem> => result.status === 'fulfilled')
          .map(result => result.value);
      } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
      }
    });
  },

  getNewsDetail: async (id: string): Promise<NewsDetail> => {
    return retryOperation(async () => {
      try {
        // Verificar que el cliente supabase existe
        if (!supabase) {
          console.error('Cliente Supabase no inicializado en servicio de noticias (detalle)');
          throw new Error('Cliente Supabase no disponible');
        }
        
        console.log('Consultando detalle de noticia con ID:', id);
        const { data, error } = await supabase.rpc('rpc_news_get', {
          p_id: id
        });

        if (error) {
          console.error('Error fetching news detail:', error);
          throw error;
        }

        if (!data || !Array.isArray(data) || data.length === 0) {
          throw new Error('No se encontró la noticia');
        }

        const response = data[0] as NewsDetailResponse;
        
        if (!response.success) {
          console.error('News detail API response unsuccessful:', response.message);
          throw new Error(response.message);
        }

        return response.data;
      } catch (error) {
        console.error('Error fetching news detail:', error);
        throw error;
      }
    });
  },

  // Helper function to get image URL with fallback
  getImageUrl: (item: NewsItem): string => {
    const fallbackImage = '/assets/images/news/default-news.jpg';
    
    // First try to get the API URL
    if (item.url?.api) {
      return item.url.api;
    }
    // Then try the web URL
    if (item.url?.web) {
      return item.url.web;
    }
    // Fallback to default image
    return fallbackImage;
  },

  // Helper function to get image dimensions
  getImageDimensions: (item: NewsItem): { width: number; height: number; style: React.CSSProperties } => {
    const baseStyle: React.CSSProperties = {
      objectFit: 'cover',
      objectPosition: 'center',
      width: '100%',
      height: '100%',
    };

    return {
      width: 400,
      height: 250,
      style: baseStyle,
    };
  },

  // Helper function to check if image exists with timeout
  checkImageExists: async (url: string): Promise<boolean> => {
    return retryOperation(async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch(url, { 
          method: 'HEAD',
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        return response.ok;
      } catch (error) {
        console.error('Error checking image:', error);
        return false;
      }
    });
  }
}; 