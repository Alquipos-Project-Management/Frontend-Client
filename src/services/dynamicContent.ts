'use client';

import { dynamicContentService as browserDynamicContentService } from './supabase-browser';

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

// Directly export the browser-specific implementation
export const dynamicContentService = browserDynamicContentService; 