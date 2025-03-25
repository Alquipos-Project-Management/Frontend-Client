import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and Key from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Check if environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Missing Supabase environment variables. Check your .env file.'
  );
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth services
export const auth = {
  signUp: async (email: string, password: string) => {
    return await supabase.auth.signUp({ email, password });
  },
  signIn: async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({ email, password });
  },
  signOut: async () => {
    return await supabase.auth.signOut();
  },
  getSession: async () => {
    return await supabase.auth.getSession();
  },
  getUser: async () => {
    return await supabase.auth.getUser();
  },
};

// Equipment services
export const equipmentService = {
  getAll: async () => {
    return await supabase.from('equipment').select('*');
  },
  getById: async (id: string) => {
    return await supabase.from('equipment').select('*').eq('id', id).single();
  },
  // Add more methods as needed
};

// Rental services
export const rentalService = {
  getAll: async () => {
    return await supabase.from('rentals').select('*');
  },
  getById: async (id: string) => {
    return await supabase.from('rentals').select('*').eq('id', id).single();
  },
  create: async (data: any) => {
    return await supabase.from('rentals').insert(data);
  },
  // Add more methods as needed
};

// Export all services
export default {
  auth,
  equipmentService,
  rentalService,
}; 