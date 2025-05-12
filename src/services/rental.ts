'use client';

import supabase from './supabase-direct';

export interface Rental {
  id: string;
  equipment_id: string;
  user_id: string;
  start_date: string;
  end_date: string;
  status: string;
  total_price: number;
  created_at?: string;
  updated_at?: string;
}

export const rentalService = {
  getAll: async () => {
    try {
      console.log('Consultando lista de alquileres');
      
      // Verificar que el cliente supabase existe
      if (!supabase) {
        console.error('Cliente Supabase no inicializado en servicio de alquileres');
        throw new Error('Cliente Supabase no disponible');
      }
      
      const { data, error } = await supabase.from('rentals').select('*');
      
      if (error) {
        console.error('Error al obtener alquileres:', error);
        throw error;
      }
      
      return { data: data || [], error: null };
    } catch (error) {
      console.error('Error en servicio de alquileres:', error);
      throw error;
    }
  },
  
  getById: async (id: string) => {
    try {
      console.log('Consultando alquiler con ID:', id);
      
      // Verificar que el cliente supabase existe
      if (!supabase) {
        console.error('Cliente Supabase no inicializado en servicio de alquileres (detalle)');
        throw new Error('Cliente Supabase no disponible');
      }
      
      const { data, error } = await supabase.from('rentals').select('*').eq('id', id).single();
      
      if (error) {
        console.error('Error al obtener alquiler por ID:', error);
        throw error;
      }
      
      if (!data) {
        throw new Error('Alquiler no encontrado');
      }
      
      return { data, error: null };
    } catch (error) {
      console.error('Error en servicio de alquiler (detalle):', error);
      throw error;
    }
  },
  
  create: async (rentalData: Partial<Rental>) => {
    try {
      console.log('Creando nuevo alquiler:', rentalData);
      
      // Verificar que el cliente supabase existe
      if (!supabase) {
        console.error('Cliente Supabase no inicializado en servicio de alquileres (crear)');
        throw new Error('Cliente Supabase no disponible');
      }
      
      const { data, error } = await supabase.from('rentals').insert(rentalData).select();
      
      if (error) {
        console.error('Error al crear alquiler:', error);
        throw error;
      }
      
      return { data, error: null };
    } catch (error) {
      console.error('Error en servicio de alquiler (crear):', error);
      throw error;
    }
  },
  
  update: async (id: string, rentalData: Partial<Rental>) => {
    try {
      console.log('Actualizando alquiler:', id);
      
      // Verificar que el cliente supabase existe
      if (!supabase) {
        console.error('Cliente Supabase no inicializado en servicio de alquileres (actualizar)');
        throw new Error('Cliente Supabase no disponible');
      }
      
      const { data, error } = await supabase.from('rentals').update(rentalData).eq('id', id).select();
      
      if (error) {
        console.error('Error al actualizar alquiler:', error);
        throw error;
      }
      
      return { data, error: null };
    } catch (error) {
      console.error('Error en servicio de alquiler (actualizar):', error);
      throw error;
    }
  },
  
  delete: async (id: string) => {
    try {
      console.log('Eliminando alquiler:', id);
      
      // Verificar que el cliente supabase existe
      if (!supabase) {
        console.error('Cliente Supabase no inicializado en servicio de alquileres (eliminar)');
        throw new Error('Cliente Supabase no disponible');
      }
      
      const { data, error } = await supabase.from('rentals').delete().eq('id', id);
      
      if (error) {
        console.error('Error al eliminar alquiler:', error);
        throw error;
      }
      
      return { data, error: null };
    } catch (error) {
      console.error('Error en servicio de alquiler (eliminar):', error);
      throw error;
    }
  }
}; 