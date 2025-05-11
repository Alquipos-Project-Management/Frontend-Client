// This script injects environment variables into the window object
// for client-side access since Next.js only exposes NEXT_PUBLIC_* vars

(function initEnv() {
  if (typeof window !== 'undefined') {
    // Inicializar objeto de entorno global
    window.__ENV__ = window.__ENV__ || {};
    
    // Obtener variables de entorno de Next.js (disponibles en tiempo de compilación)
    const nextPublicEnvVars = {};
    Object.keys(process.env || {}).forEach(key => {
      if (key.startsWith('NEXT_PUBLIC_')) {
        nextPublicEnvVars[key] = process.env[key];
      }
    });
    
    // Fusionar variables de diferentes fuentes, priorizando las ya existentes
    window.__ENV__ = {
      ...nextPublicEnvVars,
      ...window.__ENV__
    };
    
    console.log('Variables de entorno disponibles en cliente:', {
      supabaseUrl: !!window.__ENV__?.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: !!window.__ENV__?.NEXT_PUBLIC_SUPABASE_ANON_KEY
    });
  }
})();

export {}; 