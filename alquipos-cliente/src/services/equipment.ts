import { supabase } from './supabase';

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
      const { data, error } = await supabase.from('equipment').select('*');
      
      if (error) {
        console.error('Equipment getAll error:', error);
        return { data: mockEquipment, error: null };
      }
      
      return { data: data?.length ? data : mockEquipment, error: null };
    } catch (error) {
      console.error('Equipment getAll error:', error);
      return { data: mockEquipment, error: null };
    }
  },
  getById: async (id: string) => {
    try {
      const { data, error } = await supabase.from('equipment').select('*').eq('id', id).single();
      
      if (error) {
        console.error('Equipment getById error:', error);
        const mockItem = mockEquipment.find(item => item.id === id) || mockEquipment[0];
        return { data: mockItem, error: null };
      }
      
      return { data, error: null };
    } catch (error) {
      console.error('Equipment getById error:', error);
      const mockItem = mockEquipment.find(item => item.id === id) || mockEquipment[0];
      return { data: mockItem, error: null };
    }
  },
}; 