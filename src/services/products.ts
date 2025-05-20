import { createClient } from '@supabase/supabase-js';
import { Product } from '@/types/product';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export interface GetProductsParams {
  is_featured_param?: boolean;
  category_id_param?: string;
  limit_param?: number;
  offset_param?: number;
}

export interface GetProductsResponse {
  success: boolean;
  message: string;
  data: {
    limit: number;
    offset: number;
    products: Product[];
    total_count: number;
  };
}

export interface GetProductBySlugResponse {
  success: boolean;
  message: string;
  data: Product;
}

export const productService = {
  getProducts: async (params: GetProductsParams): Promise<GetProductsResponse> => {
    try {
      console.log('Making RPC call to get_products with params:', params);
      
      const { data, error } = await supabase.rpc('get_products', params);

      console.log('Raw Supabase RPC response:', {
        data,
        error,
        hasData: !!data,
        isArray: Array.isArray(data),
        dataLength: Array.isArray(data) ? data.length : 0
      });

      if (error) {
        console.error('Error fetching products:', error);
        throw error;
      }

      if (!data || !data.success) {
        console.log('No data or unsuccessful response from RPC call');
        return {
          success: false,
          message: data?.message || 'No products found',
          data: {
            limit: params.limit_param || 10,
            offset: params.offset_param || 0,
            products: [],
            total_count: 0
          }
        };
      }

      console.log('Processed RPC response:', {
        success: data.success,
        message: data.message,
        data: {
          limit: data.data.limit,
          offset: data.data.offset,
          total_count: data.data.total_count,
          products_count: data.data.products.length
        }
      });

      return data as GetProductsResponse;
    } catch (error) {
      console.error('Error in product service:', error);
      throw error;
    }
  },
  getProductBySlug: async (slug: string): Promise<GetProductBySlugResponse> => {
    try {
      console.log('Fetching product by slug:', slug);
      
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          category:categories(*)
        `)
        .eq('slug', slug)
        .single();

      console.log('Product API Response:', {
        data,
        error,
        hasData: !!data
      });

      if (error) {
        console.error('Error fetching product:', error);
        throw error;
      }

      if (!data) {
        return {
          success: false,
          message: 'Product not found',
          data: null as any
        };
      }

      return {
        success: true,
        message: 'Product found',
        data: data
      };
    } catch (error) {
      console.error('Error in product service:', error);
      throw error;
    }
  }
}; 