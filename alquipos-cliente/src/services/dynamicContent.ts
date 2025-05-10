import { supabase } from './supabase';

export interface DynamicContentRpcResponseItem {
  id: string;
  status: string;
  content: any; 
  page_key: string;
  section_key: string;
  created_at: string;
  updated_at: string;
  content_type: string;
  display_order: number;
}

export interface DynamicContentRpcResponse {
  success: boolean;
  message: string;
  data: {
    items: DynamicContentRpcResponseItem[];
  };
}

export const dynamicContentService = {
  getPageContent: async (pageKey: string): Promise<any> => {
    try {
      const { data, error } = await supabase.rpc('rpc_dynamic_content_list', {
        p_page_key: pageKey
      });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Dynamic content error:', error);
      throw error;
    }
  },
  getSectionContent: async (pageKey: string, sectionKey: string): Promise<any> => {
    try {
      const { data, error } = await supabase.rpc('rpc_dynamic_content_get', {
        p_page_key: pageKey,
        p_section_key: sectionKey
      });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Dynamic content section error:', error);
      throw error;
    }
  }
}; 