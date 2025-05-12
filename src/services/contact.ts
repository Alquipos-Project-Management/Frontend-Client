'use client';

import { ContactPageData, ContactPageContent } from '@/types/contact';
import supabase from './supabase-direct';

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
      language?: string;
      version?: number;
    }>;
  };
}

// Helper function to convert API item to ContactPageContent
const mapToContactPageContent = (item: any): ContactPageContent => {
  if (!item) {
    return {
      id: '',
      page_key: 'contact',
      section_key: '',
      content: {
        title: '',
        subtitle: ''
      },
      status: 'published',
      display_order: 0,
      content_type: 'text',
      language: 'es',
      version: 1
    };
  }
  
  return {
    id: item.id || '',
    page_key: item.page_key || 'contact',
    section_key: item.section_key || '',
    content: item.content || {
      title: '',
      subtitle: ''
    },
    status: item.status || 'published',
    display_order: item.display_order || 0,
    content_type: item.content_type || 'text',
    language: item.language || 'es',
    version: item.version || 1
  };
};

export const contactService = {
  getContactPageData: async (): Promise<ContactPageData> => {
    try {
      console.log('Consultando datos de contacto');
      
      // Verificar que el cliente supabase existe
      if (!supabase) {
        console.error('Cliente Supabase no inicializado en servicio de contacto');
        throw new Error('Cliente Supabase no disponible');
      }
      
      const { data, error } = await supabase.rpc('rpc_dynamic_content_list', {
        p_page_key: 'contact'
      });

      if (error) {
        console.error('Error al consultar datos de contacto:', error);
        throw error;
      }

      if (!data || !Array.isArray(data) || data.length === 0) {
        console.warn('No se encontraron datos de contacto');
        return {
          header: mapToContactPageContent({ section_key: 'header' }),
          info: mapToContactPageContent({ section_key: 'info' }),
          social: mapToContactPageContent({ section_key: 'social' })
        };
      }

      const response = data[0] as DynamicContentResponse;
      
      if (!response.success) {
        console.error('Respuesta de API no exitosa:', response.message);
        throw new Error(response.message);
      }

      // Transform the dynamic content into the expected format
      const items = response.data.items;
      const header = items.find(item => item.section_key === 'header');
      const info = items.find(item => item.section_key === 'info');
      const social = items.find(item => item.section_key === 'social');

      return {
        header: mapToContactPageContent(header),
        info: mapToContactPageContent(info),
        social: mapToContactPageContent(social)
      };
    } catch (error) {
      console.error('Error en servicio de contacto:', error);
      throw error;
    }
  }
}; 