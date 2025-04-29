import { ContactPageData, ContactPageContent } from '@/types/contact';
import { supabase } from './supabase';

interface DynamicContentResponse {
  success: boolean;
  message: string;
  data: {
    items: Array<{
      id: string;
      status: string;
      content: any;
      page_key: string;
      section_key: string;
      content_type: string;
      display_order: number;
    }>;
  };
}

const transformContent = (item: any): ContactPageContent => ({
  id: item.id,
  page_key: item.page_key,
  section_key: item.section_key,
  content: item.content,
  status: item.status,
  display_order: item.display_order,
  content_type: item.content_type,
  language: 'es', // Default language
  version: 1 // Default version
});

export const contactService = {
  getContactPageData: async (): Promise<ContactPageData> => {
    try {
      const { data, error } = await supabase.rpc('rpc_dynamic_content_list', {
        p_page_key: 'contact'
      });

      if (error) throw error;

      const response = data[0] as DynamicContentResponse;
      
      if (!response.success) {
        throw new Error(response.message);
      }

      // Transform the dynamic content into the expected format
      const items = response.data.items;
      const header = items.find(item => item.section_key === 'header');
      const info = items.find(item => item.section_key === 'info');
      const social = items.find(item => item.section_key === 'social');

      return {
        header: transformContent(header || {}),
        info: transformContent(info || {}),
        social: transformContent(social || {})
      };
    } catch (error) {
      console.error('Error fetching contact page data:', error);
      throw error;
    }
  }
}; 