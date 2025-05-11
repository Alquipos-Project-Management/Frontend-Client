// This script injects environment variables into the window object
// for client-side access since Next.js only exposes NEXT_PUBLIC_* vars

(function initEnv() {
  if (typeof window !== 'undefined') {
    window.__ENV__ = window.__ENV__ || {};
    
    // Add all NEXT_PUBLIC environment variables
    window.__ENV__.NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    window.__ENV__.NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    window.__ENV__.NEXT_PUBLIC_DEFAULT_ROLE_ID = process.env.NEXT_PUBLIC_DEFAULT_ROLE_ID;
    
    console.log('Environment variables initialized in browser:', {
      url_available: !!window.__ENV__.NEXT_PUBLIC_SUPABASE_URL,
      key_available: !!window.__ENV__.NEXT_PUBLIC_SUPABASE_ANON_KEY
    });
  }
})();

export {}; 