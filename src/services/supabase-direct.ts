'use client';

import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Acceder a las variables de entorno de forma segura
const getEnvVariable = (key: string): string => {
  // Cliente
  if (typeof window !== 'undefined') {
    if (window.__ENV__ && window.__ENV__[key]) {
      return window.__ENV__[key];
    }
    if (process.env && process.env[key]) {
      return process.env[key];
    }
  } 
  // Servidor
  else if (process.env && process.env[key]) {
    return process.env[key];
  }
  
  console.error(`Variable de entorno no disponible: ${key}`);
  return '';
};

// Obtener URLs de forma segura sin mostrar valores
const supabaseUrl = getEnvVariable('NEXT_PUBLIC_SUPABASE_URL');
const supabaseKey = getEnvVariable('NEXT_PUBLIC_SUPABASE_ANON_KEY');

console.log('Variables de entorno disponibles:', {
  urlDisponible: !!supabaseUrl,
  keyDisponible: !!supabaseKey
});

// Crear cliente solo si hay credenciales
let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey);
    console.log('Cliente Supabase inicializado correctamente');
  } catch (error) {
    console.error('Error al inicializar cliente Supabase:', error);
  }
} else {
  console.error('Credenciales faltantes para Supabase');
}

// Función para obtener contenido dinámico
export const getDynamicContent = async (pageKey: string) => {
  if (!supabase) {
    console.error('Cliente Supabase no inicializado');
    throw new Error('Cliente Supabase no disponible');
  }
  
  console.log('Consultando contenido para:', pageKey);
  
  const { data, error } = await supabase.rpc('rpc_dynamic_content_list', {
    p_page_key: pageKey
  });
  
  if (error) {
    console.error('Error en consulta Supabase:', error);
    throw error;
  }
  
  return data;
};

// Declare window.__ENV__ type
declare global {
  interface Window {
    __ENV__?: Record<string, string>;
  }
}

// Exportar cliente
export default supabase; 