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
  version?: number; 
  language?: string;
  metadata?: any;
}

export interface DynamicContentListRpcResponse {
  success: boolean;
  message: string;
  data: {
    items: DynamicContentRpcResponseItem[];
  };
}

export interface DynamicContentGetRpcResponse {
  success: boolean;
  message: string;
  data: DynamicContentRpcResponseItem | null;
}

// Servicio de contenido dinámico implementado directamente con Supabase
export const dynamicContentService = {
  getPageContent: async (pageKey: string): Promise<any> => {
    console.log('Solicitando contenido para página:', pageKey);
    return await getDynamicContent(pageKey);
  },
  
  getSectionContent: async (pageKey: string, sectionKey: string): Promise<DynamicContentRpcResponseItem | null> => {
    const specificIdForHeader = "361df6ec-ebc3-4b6b-b7e2-08eea667d629";
    console.log(`Solicitando contenido dinámico con ID: ${specificIdForHeader} usando rpc_dynamic_content_get. pageKey (${pageKey}) and sectionKey (${sectionKey}) are ignored for this call.`);
    
    // Expect an array of DynamicContentGetRpcResponse based on the logs
    const { data: rpcResponseArray, error } = await supabase.rpc<DynamicContentGetRpcResponse[]>('rpc_dynamic_content_get', {
      p_id: specificIdForHeader
    });
    
    if (error) {
      console.error(`Error fetching section content with ID ${specificIdForHeader} from rpc_dynamic_content_get:`, error);
      throw error; 
    }

    // Check if the array is valid and contains our expected object
    if (rpcResponseArray && rpcResponseArray.length > 0) {
      const actualResponse = rpcResponseArray[0]; // Get the first (and likely only) element
      if (actualResponse && actualResponse.success && actualResponse.data) {
        console.log(`Successfully fetched content for ID ${specificIdForHeader}.`);
        return actualResponse.data;
      } else if (actualResponse && !actualResponse.success) {
        console.warn(`rpc_dynamic_content_get call for ID ${specificIdForHeader} was not successful. RPC Message: ${actualResponse.message}. Full actual response:`, JSON.stringify(actualResponse, null, 2));
        return null;
      }
    }
    
    console.warn(`No content found, unexpected array structure, or call failed for ID: ${specificIdForHeader} from rpc_dynamic_content_get. Full RPC response array:`, JSON.stringify(rpcResponseArray, null, 2));
    return null;
  }
}; 