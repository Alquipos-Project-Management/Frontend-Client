'use client';

import supabase from './supabase-direct';

// Mock data for when Supabase is unavailable
const mockEquipment = [
  {
    id: '1',
    name: 'Andamio modular',
    description: 'Andamio de alta resistencia',
    price: 150,
    category: 'andamios'
  },
  {
    id: '2',
    name: 'Mezcladora de concreto',
    description: 'Mezcladora de concreto industrial',
    price: 350,
    category: 'equipos'
  }
];

export const equipmentService = {
  getAll: async () => {
    try {
      console.log('Consultando lista de equipos');
      
      // Verificar que el cliente supabase existe
      if (!supabase) {
        console.error('Cliente Supabase no inicializado en servicio de equipos');
        throw new Error('Cliente Supabase no disponible');
      }
      
      const { data, error } = await supabase.from('equipment').select('*');
      
      if (error) {
        console.error('Error al obtener equipos:', error);
        throw error;
      }
      
      return { data: data || [], error: null };
    } catch (error) {
      console.error('Error en servicio de equipos:', error);
      // Propagamos el error en lugar de usar mocks
      throw error;
    }
  },
  
  getById: async (id: string) => {
    try {
      console.log('Consultando equipo con ID:', id);
      
      // Verificar que el cliente supabase existe
      if (!supabase) {
        console.error('Cliente Supabase no inicializado en servicio de equipos (detalle)');
        throw new Error('Cliente Supabase no disponible');
      }
      
      const { data, error } = await supabase.from('equipment').select('*').eq('id', id).single();
      
      if (error) {
        console.error('Error al obtener equipo por ID:', error);
        throw error;
      }
      
      if (!data) {
        throw new Error('Equipo no encontrado');
      }
      
      return { data, error: null };
    } catch (error) {
      console.error('Error en servicio de equipo (detalle):', error);
      // Propagamos el error en lugar de usar mocks
      throw error;
    }
  },
}; 