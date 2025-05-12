'use client';

import { createClient } from '@supabase/supabase-js';

// Create a direct browser-only Supabase client
const createBrowserSupabaseClient = () => {
  // Hardcoded credentials as fallback
  const HARDCODED_URL = 'https://ptzujbrflyzpagdximss.supabase.co';
  const HARDCODED_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0enVqYnJmbHl6cGFnZHhpbXNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NDc3NzYsImV4cCI6MjA1ODQyMzc3Nn0.VUP1b7jGjKxrSH3oxIg4LFfUJn2jzLTaLFk-HARGCh4';
  
  // Try to get from environment or fallback to hardcoded values
  const supabaseUrl = window.__ENV__?.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || HARDCODED_URL;
  const supabaseKey = window.__ENV__?.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || HARDCODED_KEY;
  
  console.log('Browser Supabase client init:', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseKey,
    usingHardcoded: supabaseUrl === HARDCODED_URL
  });
  
  try {
    // Siempre creamos un cliente real con las credenciales
    const client = createClient(supabaseUrl, supabaseKey);
    console.log('Supabase client created successfully');
    return client;
  } catch (error) {
    console.error('Critical error creating browser Supabase client:', error);
    throw new Error('Failed to initialize Supabase client with valid credentials');
  }
};

// Never expose the client until browser is ready
let browserClient = null;

// Safe getter for the client that ensures browser environment
export const getBrowserClient = () => {
  if (typeof window === 'undefined') {
    console.warn('Attempted to get browser client in non-browser environment');
    throw new Error('Browser client cannot be used in server environment');
  }
  
  if (!browserClient) {
    browserClient = createBrowserSupabaseClient();
  }
  
  return browserClient;
};

// Direct access to dynamic content with real Supabase client
export const dynamicContentService = {
  getPageContent: async (pageKey) => {
    try {
      const client = getBrowserClient();
      
      console.log('Calling RPC from browser client with key:', pageKey);
      const { data, error } = await client.rpc('rpc_dynamic_content_list', {
        p_page_key: pageKey
      });
      
      if (error) {
        console.error('Browser RPC error:', error);
        throw error;
      }
      
      console.log('Data received from Supabase:', !!data);
      
      // Si no hay datos retornamos lista vacía pero con estructura correcta
      if (!data) {
        return [{
          success: true,
          message: "No data available from Supabase",
          data: { items: [] }
        }];
      }
      
      return data;
    } catch (error) {
      console.error('Critical RPC error - cannot continue:', error);
      throw error; // Permitir que el error se propague para debugging
    }
  }
}; 