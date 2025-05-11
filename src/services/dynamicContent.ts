'use client';

import supabase, { getDynamicContent } from './supabase-direct';

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

// Servicio de contenido dinámico implementado directamente con Supabase
export const dynamicContentService = {
  getPageContent: async (pageKey: string): Promise<any> => {
    console.log('Solicitando contenido para página:', pageKey);
    return await getDynamicContent(pageKey);
  },
  
  getSectionContent: async (pageKey: string, sectionKey: string): Promise<any> => {
    console.log('Solicitando sección específica:', sectionKey, 'de página:', pageKey);
    const { data, error } = await supabase.rpc('rpc_dynamic_content_get', {
      p_page_key: pageKey,
      p_section_key: sectionKey
    });
    
    if (error) throw error;
    return data;
  }
}; 