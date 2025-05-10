import { supabase } from './supabase';

export const equipmentService = {
  getAll: async () => {
    try {
      return supabase.from('equipment').select('*');
    } catch (error) {
      console.error('Equipment getAll error:', error);
      return { data: null, error };
    }
  },
  getById: async (id: string) => {
    try {
      return supabase.from('equipment').select('*').eq('id', id).single();
    } catch (error) {
      console.error('Equipment getById error:', error);
      return { data: null, error };
    }
  },
}; 