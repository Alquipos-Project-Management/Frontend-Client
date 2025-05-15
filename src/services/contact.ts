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

interface ClientCreationResponse {
  success: boolean;
  message: string;
  data: any;
}

interface ClientCreationRequest {
  p_first_name: string;
  p_last_name: string;
  p_email: string;
  p_phone: string | null;
  p_date_of_birth: string | null;
  p_address: string | null;
  p_extra_information?: {
    tipo_cliente?: string;
    notas?: string;
    empresa?: string;
    asunto?: string;
  };
  p_is_active: boolean;
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
  },

  createClient: async (clientData: ClientCreationRequest): Promise<ClientCreationResponse> => {
    try {
      if (!supabase) {
        console.error('Supabase client not initialized in contact service');
        alert('Error: Supabase client not available');
        throw new Error('Supabase client not available');
      }

      console.log('Calling rpc_client_create with data:', JSON.stringify(clientData, null, 2));
      alert('Making RPC call to rpc_client_create with data: ' + JSON.stringify(clientData, null, 2));

      const { data, error } = await supabase.rpc('rpc_client_create', {
        p_first_name: clientData.p_first_name,
        p_last_name: clientData.p_last_name,
        p_email: clientData.p_email,
        p_phone: clientData.p_phone,
        p_date_of_birth: clientData.p_date_of_birth,
        p_address: clientData.p_address,
        p_extra_information: clientData.p_extra_information,
        p_is_active: clientData.p_is_active
      });

      if (error) {
        console.error('Error creating client:', error);
        alert('Error in RPC call: ' + JSON.stringify(error, null, 2));
        throw error;
      }

      console.log('RPC response:', JSON.stringify(data, null, 2));
      alert('RPC Response: ' + JSON.stringify(data, null, 2));
      return data[0] as ClientCreationResponse;
    } catch (error) {
      console.error('Error in contact service:', error);
      alert('Error in contact service: ' + JSON.stringify(error, null, 2));
      throw error;
    }
  }
}; 