'use client';

// Este es un servicio mock para ser reemplazado por la implementación real con Supabase
export const rentalService = {
  getAll: async () => {
    return {
      data: [],
      error: null
    };
  },
  getById: async (id) => {
    return {
      data: null,
      error: null
    };
  },
  create: async (data) => {
    return {
      data: null,
      error: null
    };
  },
  update: async (id, data) => {
    return {
      data: null,
      error: null
    };
  },
  delete: async (id) => {
    return {
      data: null,
      error: null
    };
  }
}; 