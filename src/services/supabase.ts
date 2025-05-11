import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and Key from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a mock implementation for when credentials are missing
const mockClient = {
  from: () => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => Promise.resolve({ data: null, error: null }),
    delete: () => Promise.resolve({ data: null, error: null }),
    eq: () => ({ single: () => Promise.resolve({ data: null, error: null }) }),
  }),
  rpc: () => Promise.resolve({ data: [], error: null }),
  auth: {
    signUp: () => Promise.resolve({ data: null, error: null }),
    signInWithPassword: () => Promise.resolve({ data: null, error: null }),
    signOut: () => Promise.resolve({ data: null, error: null }),
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    getUser: () => Promise.resolve({ data: { user: null }, error: null }),
  },
};

// Create a client if credentials are available, otherwise use mock
const supabaseClient = (() => {
  if (supabaseUrl && supabaseAnonKey) {
    try {
      console.log('Creating Supabase client with credentials');
      return createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        },
        global: {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      });
    } catch (error) {
      console.error('Error creating Supabase client:', error);
      console.log('Falling back to mock client');
      return mockClient;
    }
  }
  console.warn('Supabase credentials not found, using mock client');
  return mockClient;
})();

// Initialize a client export for global use
export const supabase = supabaseClient;

// Auth services
export const auth = {
  signUp: async (email: string, password: string) => {
    try {
      return await supabaseClient.auth.signUp({ email, password });
    } catch (error) {
      console.error('Auth signUp error:', error);
      throw error;
    }
  },
  signIn: async (email: string, password: string) => {
    try {
      return await supabaseClient.auth.signInWithPassword({ email, password });
    } catch (error) {
      console.error('Auth signIn error:', error);
      throw error;
    }
  },
  signOut: async () => {
    try {
      return await supabaseClient.auth.signOut();
    } catch (error) {
      console.error('Auth signOut error:', error);
      throw error;
    }
  },
  getSession: async () => {
    try {
      return await supabaseClient.auth.getSession();
    } catch (error) {
      console.error('Auth getSession error:', error);
      throw error;
    }
  },
  getUser: async () => {
    try {
      return await supabaseClient.auth.getUser();
    } catch (error) {
      console.error('Auth getUser error:', error);
      throw error;
    }
  },
};

// Equipment services
export const equipmentService = {
  getAll: async () => {
    try {
      return await supabaseClient.from('equipment').select('*');
    } catch (error) {
      console.error('Equipment getAll error:', error);
      return { data: [], error };
    }
  },
  getById: async (id: string) => {
    try {
      return await supabaseClient.from('equipment').select('*').eq('id', id).single();
    } catch (error) {
      console.error('Equipment getById error:', error);
      return { data: null, error };
    }
  },
};

// Rental services
export const rentalService = {
  getAll: async () => {
    try {
      return await supabaseClient.from('rentals').select('*');
    } catch (error) {
      console.error('Rental getAll error:', error);
      return { data: [], error };
    }
  },
  getById: async (id: string) => {
    try {
      return await supabaseClient.from('rentals').select('*').eq('id', id).single();
    } catch (error) {
      console.error('Rental getById error:', error);
      return { data: null, error };
    }
  },
  create: async (data: any) => {
    try {
      return await supabaseClient.from('rentals').insert(data);
    } catch (error) {
      console.error('Rental create error:', error);
      return { data: null, error };
    }
  },
};

// Dynamic Content Service Definition
export interface DynamicContentRpcResponseItem {
  id: string;
  status: string;
  content: any;
  page_key: string;
  created_at: string;
  updated_at: string;
  section_key: string;
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
      if (!supabaseClient.rpc) {
        console.error('RPC method not available on supabase client');
        return [{
          success: true,
          message: "Mock data due to RPC not available",
          data: {
            items: []
          }
        }];
      }
      
      const { data, error } = await supabaseClient.rpc('rpc_dynamic_content_list', {
        p_page_key: pageKey
      });
      
      if (error) throw error;
      
      // If we're using the mock client, return demo data
      if (!data) {
        return [{
          success: true,
          message: "Demo data",
          data: {
            items: []
          }
        }];
      }
      
      return data;
    } catch (error) {
      console.error('Dynamic content error:', error);
      // Return empty mock data on error
      return [{
        success: true,
        message: "Mock data",
        data: {
          items: []
        }
      }];
    }
  },
  getSectionContent: async (pageKey: string, sectionKey: string): Promise<any> => {
    try {
      const { data, error } = await supabaseClient.rpc('rpc_dynamic_content_get', {
        p_page_key: pageKey,
        p_section_key: sectionKey
      });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Dynamic content section error:', error);
      return null;
    }
  }
};

// Make sure supabase is exported directly
export { supabase as default }; 