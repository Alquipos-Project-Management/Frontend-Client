import { createClient } from '@supabase/supabase-js';
import { Category } from '@/types/product';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export interface GetCategoryBySlugResponse {
  success: boolean;
  message: string;
  data: Category;
}

export const categoryService = {
  getCategoryBySlug: async (slug: string): Promise<GetCategoryBySlugResponse> => {
    try {
      console.log('Fetching category by slug:', slug);
      
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('slug', slug)
        .single();

      console.log('Category API Response:', {
        data,
        error,
        hasData: !!data
      });

      if (error) {
        console.error('Error fetching category:', error);
        throw error;
      }

      if (!data) {
        return {
          success: false,
          message: 'Category not found',
          data: null as any
        };
      }

      return {
        success: true,
        message: 'Category found',
        data: data
      };
    } catch (error) {
      console.error('Error in category service:', error);
      throw error;
    }
  }
}; 