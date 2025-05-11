'use client';

import { createClient } from '@supabase/supabase-js';

// Create a consistent mock client for fallbacks
const createMockClient = () => ({
  from: () => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => Promise.resolve({ data: null, error: null }),
    delete: () => Promise.resolve({ data: null, error: null }),
    eq: () => ({ single: () => Promise.resolve({ data: null, error: null }) }),
  }),
  rpc: (name: string, params: any) => {
    console.log(`Mock RPC call to ${name} with params:`, params);
    return Promise.resolve({ 
      data: [{
        success: true,
        message: "Mock data from RPC call",
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
  },
});

// Safe access to environment variables
const getEnv = (key: string) => {
  if (typeof window !== 'undefined') {
    // Client-side
    return (window as any).__ENV__?.[key] || 
           process.env[key] || 
           '';
  }
  // Server-side
  return process.env[key] || '';
};

// Global instance variable that persists between renders
let supabaseInstance: any = null;

// Initialize the Supabase client safely
const initSupabase = () => {
  if (supabaseInstance) return supabaseInstance;

  try {
    // Get configuration from environment variables
    const supabaseUrl = getEnv('NEXT_PUBLIC_SUPABASE_URL');
    const supabaseKey = getEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY');

    console.log('Supabase init - URL available:', !!supabaseUrl, 'Key available:', !!supabaseKey);

    // If either URL or key is missing, use mock client
    if (!supabaseUrl || !supabaseKey) {
      console.warn('Missing Supabase credentials, using mock client');
      supabaseInstance = createMockClient();
      return supabaseInstance;
    }

    // Initialize the real client
    supabaseInstance = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });

    // Add a safeguard for the RPC method
    const originalRpc = supabaseInstance.rpc;
    supabaseInstance.rpc = function safeguardedRpc(...args: any[]) {
      try {
        return originalRpc.apply(this, args);
      } catch (error) {
        console.error('Error calling RPC:', error);
        return Promise.resolve({ data: null, error });
      }
    };

    return supabaseInstance;
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    supabaseInstance = createMockClient();
    return supabaseInstance;
  }
};

// Export a function to get the client rather than the client directly
export const getSupabaseClient = () => {
  return initSupabase();
};

// For compatibility with existing code
export const supabase = typeof window !== 'undefined' 
  ? initSupabase() 
  : createMockClient();

// Dynamic Content Service with safer implementation
export const dynamicContentService = {
  getPageContent: async (pageKey: string): Promise<any> => {
    try {
      const client = getSupabaseClient();
      
      // Double-check the RPC method exists
      if (typeof client.rpc !== 'function') {
        console.error('RPC method is not a function');
        return [{
          success: true,
          message: "Mock data (RPC not available)",
          data: { items: [] }
        }];
      }
      
      console.log('Calling RPC with page key:', pageKey);
      const { data, error } = await client.rpc('rpc_dynamic_content_list', {
        p_page_key: pageKey
      });
      
      if (error) {
        console.error('RPC error:', error);
        throw error;
      }
      
      console.log('RPC response received:', !!data);
      
      if (!data) {
        return [{
          success: true,
          message: "Demo data (no data returned)",
          data: { items: [] }
        }];
      }
      
      return data;
    } catch (error) {
      console.error('Dynamic content error:', error);
      return [{
        success: true,
        message: "Mock data (error fallback)",
        data: { items: [] }
      }];
    }
  },
  
  getSectionContent: async (pageKey: string, sectionKey: string): Promise<any> => {
    try {
      const client = getSupabaseClient();
      
      if (typeof client.rpc !== 'function') {
        console.error('RPC method is not a function for section content');
        return null;
      }
      
      const { data, error } = await client.rpc('rpc_dynamic_content_get', {
        p_page_key: pageKey,
        p_section_key: sectionKey
      });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Section content error:', error);
      return null;
    }
  }
};

// Fallback exports for other services
export const auth = {
  signUp: async (email: string, password: string) => {
    try {
      return await getSupabaseClient().auth.signUp({ email, password });
    } catch (error) {
      console.error('Auth error:', error);
      return { data: null, error };
    }
  },
  signIn: async (email: string, password: string) => {
    try {
      return await getSupabaseClient().auth.signInWithPassword({ email, password });
    } catch (error) {
      console.error('Auth error:', error);
      return { data: null, error };
    }
  },
  signOut: async () => {
    try {
      return await getSupabaseClient().auth.signOut();
    } catch (error) {
      console.error('Auth error:', error);
      return { error };
    }
  }
};

export const equipmentService = {
  getAll: async () => {
    try {
      return await getSupabaseClient().from('equipment').select('*');
    } catch (error) {
      console.error('Equipment error:', error);
      return { data: [], error };
    }
  }
};

export default supabase; 