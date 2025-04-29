import { createClient, SupabaseClient, AuthError } from '@supabase/supabase-js';

// Get Supabase URL and Key from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(`
    Missing Supabase environment variables.
    Please add the following to your .env file:
    
    NEXT_PUBLIC_SUPABASE_URL=your-project-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
    
    You can find these values in your Supabase project settings.
  `);
}

// Create a mock client for initialization
const mockClient = {
  rpc: () => Promise.reject(new Error('Supabase client not initialized')),
  from: () => ({
    select: () => Promise.reject(new Error('Supabase client not initialized')),
    insert: () => Promise.reject(new Error('Supabase client not initialized')),
    update: () => Promise.reject(new Error('Supabase client not initialized')),
    delete: () => Promise.reject(new Error('Supabase client not initialized')),
    eq: () => Promise.reject(new Error('Supabase client not initialized')),
    single: () => Promise.reject(new Error('Supabase client not initialized')),
  }),
  auth: {
    signUp: () => Promise.reject(new Error('Supabase client not initialized')),
    signInWithPassword: () => Promise.reject(new Error('Supabase client not initialized')),
    signOut: () => Promise.reject(new Error('Supabase client not initialized')),
    getSession: () => Promise.reject(new Error('Supabase client not initialized')),
    getUser: () => Promise.reject(new Error('Supabase client not initialized')),
  }
} as unknown as SupabaseClient;

// Initialize with mock client
let supabaseClient: SupabaseClient = mockClient;
let isInitialized = false;
let initializationPromise: Promise<void> | null = null;

const initializeSupabase = async () => {
  if (isInitialized) return;
  if (initializationPromise) return initializationPromise;

  initializationPromise = (async () => {
    try {
      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Missing Supabase credentials');
      }

      const client = createClient(supabaseUrl, supabaseAnonKey, {
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

      // Test the connection
      try {
        await client.from('news').select('id').limit(1);
        console.log('Supabase connection successful');
        supabaseClient = client;
        isInitialized = true;
      } catch (error: unknown) {
        console.error('Supabase connection test failed:', error);
        throw error;
      }
    } catch (error) {
      console.error('Error initializing Supabase client:', error);
      // Keep the mock client if initialization fails
    }
  })();

  return initializationPromise;
};

// Initialize the client immediately
void initializeSupabase();

// Create a wrapper that ensures initialization
const getSupabaseClient = async () => {
  if (!isInitialized) {
    await initializeSupabase();
  }
  return supabaseClient;
};

export const supabase = {
  rpc: async (...args: Parameters<SupabaseClient['rpc']>) => {
    const client = await getSupabaseClient();
    return client.rpc(...args);
  },
  from: async (...args: Parameters<SupabaseClient['from']>) => {
    const client = await getSupabaseClient();
    return client.from(...args);
  },
  auth: {
    signUp: async (...args: Parameters<SupabaseClient['auth']['signUp']>) => {
      const client = await getSupabaseClient();
      return client.auth.signUp(...args);
    },
    signInWithPassword: async (...args: Parameters<SupabaseClient['auth']['signInWithPassword']>) => {
      const client = await getSupabaseClient();
      return client.auth.signInWithPassword(...args);
    },
    signOut: async () => {
      const client = await getSupabaseClient();
      return client.auth.signOut();
    },
    getSession: async () => {
      const client = await getSupabaseClient();
      return client.auth.getSession();
    },
    getUser: async () => {
      const client = await getSupabaseClient();
      return client.auth.getUser();
    },
  },
};

// Auth services
export const auth = {
  signUp: async (email: string, password: string) => {
    try {
      return await supabase.auth.signUp({ email, password });
    } catch (error) {
      console.error('Auth signUp error:', error);
      throw error;
    }
  },
  signIn: async (email: string, password: string) => {
    try {
      return await supabase.auth.signInWithPassword({ email, password });
    } catch (error) {
      console.error('Auth signIn error:', error);
      throw error;
    }
  },
  signOut: async () => {
    try {
      return await supabase.auth.signOut();
    } catch (error) {
      console.error('Auth signOut error:', error);
      throw error;
    }
  },
  getSession: async () => {
    try {
      return await supabase.auth.getSession();
    } catch (error) {
      console.error('Auth getSession error:', error);
      throw error;
    }
  },
  getUser: async () => {
    try {
      return await supabase.auth.getUser();
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
      const query = await supabase.from('equipment');
      return query.select('*');
    } catch (error) {
      console.error('Equipment getAll error:', error);
      throw error;
    }
  },
  getById: async (id: string) => {
    try {
      const query = await supabase.from('equipment');
      return query.select('*').eq('id', id).single();
    } catch (error) {
      console.error('Equipment getById error:', error);
      throw error;
    }
  },
};

// Rental services
export const rentalService = {
  getAll: async () => {
    try {
      const query = await supabase.from('rentals');
      return query.select('*');
    } catch (error) {
      console.error('Rental getAll error:', error);
      throw error;
    }
  },
  getById: async (id: string) => {
    try {
      const query = await supabase.from('rentals');
      return query.select('*').eq('id', id).single();
    } catch (error) {
      console.error('Rental getById error:', error);
      throw error;
    }
  },
  create: async (data: any) => {
    try {
      const query = await supabase.from('rentals');
      return query.insert(data);
    } catch (error) {
      console.error('Rental create error:', error);
      throw error;
    }
  },
};

// Export all services
export default {
  auth,
  equipmentService,
  rentalService,
}; 