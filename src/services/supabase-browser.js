'use client';

import { createClient } from '@supabase/supabase-js';

// Create a direct browser-only Supabase client
const createBrowserSupabaseClient = () => {
  // Get directly from inline script environment variables
  const supabaseUrl = window.__ENV__?.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = window.__ENV__?.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  
  console.log('Browser Supabase client init:', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseKey
  });
  
  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in browser');
    return createMockClient();
  }
  
  try {
    return createClient(supabaseUrl, supabaseKey);
  } catch (error) {
    console.error('Error creating browser Supabase client:', error);
    return createMockClient();
  }
};

// Create a consistent mock client for fallbacks
const createMockClient = () => {
  console.warn('Using mock Supabase client');
  
  return {
    from: () => ({
      select: () => Promise.resolve({ data: [], error: null }),
      insert: () => Promise.resolve({ data: null, error: null }),
      update: () => Promise.resolve({ data: null, error: null }),
      delete: () => Promise.resolve({ data: null, error: null }),
      eq: () => ({ single: () => Promise.resolve({ data: null, error: null }) }),
    }),
    rpc: (funcName, params) => {
      console.log(`Mock RPC call to ${funcName}:`, params);
      return Promise.resolve({
        data: [{
          success: true,
          message: "Mock data from browser client",
          data: { items: [] }
        }],
        error: null
      });
    },
    auth: {
      signUp: () => Promise.resolve({ data: null, error: null }),
      signInWithPassword: () => Promise.resolve({ data: null, error: null }),
      signOut: () => Promise.resolve({ data: null, error: null }),
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      getUser: () => Promise.resolve({ data: { user: null }, error: null }),
    }
  };
};

// Never expose the client until browser is ready
let browserClient = null;

// Safe getter for the client that ensures browser environment
export const getBrowserClient = () => {
  if (typeof window === 'undefined') {
    console.warn('Attempted to get browser client in non-browser environment');
    return createMockClient();
  }
  
  if (!browserClient) {
    browserClient = createBrowserSupabaseClient();
  }
  
  return browserClient;
};

// Direct access to dynamic content that's guaranteed to work
export const dynamicContentService = {
  getPageContent: async (pageKey) => {
    try {
      const client = getBrowserClient();
      
      // Explicitly check if rpc exists
      if (!client || typeof client.rpc !== 'function') {
        console.error('RPC not available on browser client');
        return [{
          success: true,
          message: "Mock data (browser fallback)",
          data: { items: [] }
        }];
      }
      
      console.log('Calling RPC from browser client:', pageKey);
      const { data, error } = await client.rpc('rpc_dynamic_content_list', {
        p_page_key: pageKey
      });
      
      if (error) {
        console.error('Browser RPC error:', error);
        throw error;
      }
      
      if (!data) {
        return [{
          success: true,
          message: "No data returned (browser client)",
          data: { items: [] }
        }];
      }
      
      return data;
    } catch (error) {
      console.error('Dynamic content browser error:', error);
      return [{
        success: true,
        message: "Error fallback (browser client)",
        data: { items: [] }
      }];
    }
  }
}; 