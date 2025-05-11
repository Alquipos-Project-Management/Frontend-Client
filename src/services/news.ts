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

// Mock news data
const mockNewsItems: NewsItem[] = [
  {
    id: '1',
    slug: 'nuevos-equipos-2023',
    tags: ['equipos', 'nuevos', 'construcción'],
    title: 'Nuevos equipos disponibles para 2023',
    status: 'published',
    summary: 'Hemos incorporado nuevos equipos a nuestra flota para satisfacer las necesidades de nuestros clientes.',
    created_at: '2023-01-15T08:00:00.000Z',
    is_featured: true,
    published_at: '2023-01-15T08:00:00.000Z',
  },
  {
    id: '2',
    slug: 'promocion-alquiler-temporada',
    tags: ['promoción', 'alquiler', 'descuento'],
    title: 'Promoción especial para alquiler por temporada',
    status: 'published',
    summary: 'Aprovecha nuestras tarifas especiales para alquileres de larga duración.',
    created_at: '2023-02-10T10:30:00.000Z',
    is_featured: false,
    published_at: '2023-02-10T10:30:00.000Z',
  }
];

// Mock news detail
const getMockNewsDetail = (id: string): NewsDetail => {
  const baseItem = mockNewsItems.find(item => item.id === id) || mockNewsItems[0];
  
  return {
    ...baseItem,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisi consectetur nisi, euismod nisi nisi vel euismod.',
    metadata: { views: 1250, likes: 45 },
    author_id: 'author-1',
    is_active: true,
    updated_at: '2023-03-01T14:22:00.000Z',
    content_type: 'news',
    seo_metadata: {
      title: baseItem.title,
      keywords: baseItem.tags.join(', '),
      description: baseItem.summary
    },
    display_order: 1
  };
};

const handleSupabaseError = (error: any) => {
  console.error('Supabase error:', error);
  throw new Error(error.message || 'Error al conectar con el servidor');
};

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const retryOperation = async <T>(
  operation: () => Promise<T>,
  retries = MAX_RETRIES,
  delayMs = RETRY_DELAY
): Promise<T> => {
  try {
    return await operation();
  } catch (error) {
    if (retries === 0) throw error;
    await delay(delayMs);
    return retryOperation(operation, retries - 1, delayMs * 2);
  }
};

export const newsService = {
  getNewsList: async (): Promise<NewsItem[]> => {
    return retryOperation(async () => {
      try {
        const { data, error } = await supabase.rpc('rpc_news_list');

        if (error) {
          console.error('Error fetching news list:', error);
          return mockNewsItems;
        }

        if (!data || !Array.isArray(data) || data.length === 0) {
          return mockNewsItems;
        }

        const response = data[0] as NewsResponse;
        
        if (!response.success) {
          console.error('News API response unsuccessful:', response.message);
          return mockNewsItems;
        }

        const items = response.data.items || [];
        if (items.length === 0) {
          return mockNewsItems;
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
        return mockNewsItems;
      }
    });
  },

  getNewsDetail: async (id: string): Promise<NewsDetail> => {
    return retryOperation(async () => {
      try {
        const { data, error } = await supabase.rpc('rpc_news_get', {
          p_id: id
        });

        if (error) {
          console.error('Error fetching news detail:', error);
          return getMockNewsDetail(id);
        }

        if (!data || !Array.isArray(data) || data.length === 0) {
          return getMockNewsDetail(id);
        }

        const response = data[0] as NewsDetailResponse;
        
        if (!response.success) {
          console.error('News detail API response unsuccessful:', response.message);
          return getMockNewsDetail(id);
        }

        return response.data;
      } catch (error) {
        console.error('Error fetching news detail:', error);
        return getMockNewsDetail(id);
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
  getImageDimensions: (item: NewsItem): { width: number; height: number; style: CSSProperties } => {
    const baseStyle: CSSProperties = {
      objectFit: 'cover' as const,
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