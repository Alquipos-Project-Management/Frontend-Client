module.exports = {

"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[project]/src/services/supabase.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "auth": (()=>auth),
    "default": (()=>__TURBOPACK__default__export__),
    "dynamicContentService": (()=>dynamicContentService),
    "equipmentService": (()=>equipmentService),
    "rentalService": (()=>rentalService),
    "supabase": (()=>supabase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
;
// Get Supabase URL and Key from environment variables
const supabaseUrl = ("TURBOPACK compile-time value", "https://ptzujbrflyzpagdximss.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0enVqYnJmbHl6cGFnZHhpbXNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NDc3NzYsImV4cCI6MjA1ODQyMzc3Nn0.VUP1b7jGjKxrSH3oxIg4LFfUJn2jzLTaLFk-HARGCh4");
// Validate environment variables
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
// Create a mock client for initialization
const mockClient = {
    rpc: ()=>Promise.reject(new Error('Supabase client not initialized')),
    from: ()=>({
            select: ()=>Promise.reject(new Error('Supabase client not initialized')),
            insert: ()=>Promise.reject(new Error('Supabase client not initialized')),
            update: ()=>Promise.reject(new Error('Supabase client not initialized')),
            delete: ()=>Promise.reject(new Error('Supabase client not initialized')),
            eq: ()=>Promise.reject(new Error('Supabase client not initialized')),
            single: ()=>Promise.reject(new Error('Supabase client not initialized'))
        }),
    auth: {
        signUp: ()=>Promise.reject(new Error('Supabase client not initialized')),
        signInWithPassword: ()=>Promise.reject(new Error('Supabase client not initialized')),
        signOut: ()=>Promise.reject(new Error('Supabase client not initialized')),
        getSession: ()=>Promise.reject(new Error('Supabase client not initialized')),
        getUser: ()=>Promise.reject(new Error('Supabase client not initialized'))
    }
};
// Initialize with mock client
let supabaseClient = mockClient;
let isInitialized = false;
let initializationPromise = null;
let initializationAttempts = 0;
const MAX_INITIALIZATION_ATTEMPTS = 3;
const initializeSupabase = async ()=>{
    if (isInitialized) return supabaseClient;
    if (initializationPromise) return initializationPromise;
    initializationPromise = (async ()=>{
        try {
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, {
                auth: {
                    persistSession: true,
                    autoRefreshToken: true,
                    detectSessionInUrl: true
                },
                global: {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            });
            // Test the connection with retry logic
            while(initializationAttempts < MAX_INITIALIZATION_ATTEMPTS){
                try {
                    await client.from('news').select('id').limit(1);
                    console.log('Supabase connection successful');
                    supabaseClient = client;
                    isInitialized = true;
                    return client;
                } catch (error) {
                    initializationAttempts++;
                    if (initializationAttempts === MAX_INITIALIZATION_ATTEMPTS) {
                        throw error;
                    }
                    // Wait before retrying (exponential backoff)
                    await new Promise((resolve)=>setTimeout(resolve, Math.pow(2, initializationAttempts) * 1000));
                }
            }
            throw new Error('Failed to initialize Supabase client after maximum attempts');
        } catch (error) {
            console.error('Error initializing Supabase client:', error);
            // Reset initialization state on failure
            isInitialized = false;
            initializationPromise = null;
            throw error;
        }
    })();
    return initializationPromise;
};
// Create a wrapper that ensures initialization
const getSupabaseClient = async ()=>{
    try {
        if (!isInitialized) {
            await initializeSupabase();
        }
        return supabaseClient;
    } catch (error) {
        console.error('Failed to get Supabase client:', error);
        throw error;
    }
};
const supabase = {
    rpc: async (...args)=>{
        const client = await getSupabaseClient();
        return client.rpc(...args);
    },
    from: async (...args)=>{
        const client = await getSupabaseClient();
        return client.from(...args);
    },
    auth: {
        signUp: async (...args)=>{
            const client = await getSupabaseClient();
            return client.auth.signUp(...args);
        },
        signInWithPassword: async (...args)=>{
            const client = await getSupabaseClient();
            return client.auth.signInWithPassword(...args);
        },
        signOut: async ()=>{
            const client = await getSupabaseClient();
            return client.auth.signOut();
        },
        getSession: async ()=>{
            const client = await getSupabaseClient();
            return client.auth.getSession();
        },
        getUser: async ()=>{
            const client = await getSupabaseClient();
            return client.auth.getUser();
        }
    }
};
const auth = {
    signUp: async (email, password)=>{
        try {
            return await supabase.auth.signUp({
                email,
                password
            });
        } catch (error) {
            console.error('Auth signUp error:', error);
            throw error;
        }
    },
    signIn: async (email, password)=>{
        try {
            return await supabase.auth.signInWithPassword({
                email,
                password
            });
        } catch (error) {
            console.error('Auth signIn error:', error);
            throw error;
        }
    },
    signOut: async ()=>{
        try {
            return await supabase.auth.signOut();
        } catch (error) {
            console.error('Auth signOut error:', error);
            throw error;
        }
    },
    getSession: async ()=>{
        try {
            return await supabase.auth.getSession();
        } catch (error) {
            console.error('Auth getSession error:', error);
            throw error;
        }
    },
    getUser: async ()=>{
        try {
            return await supabase.auth.getUser();
        } catch (error) {
            console.error('Auth getUser error:', error);
            throw error;
        }
    }
};
const equipmentService = {
    getAll: async ()=>{
        try {
            const query = await supabase.from('equipment');
            return query.select('*');
        } catch (error) {
            console.error('Equipment getAll error:', error);
            throw error;
        }
    },
    getById: async (id)=>{
        try {
            const query = await supabase.from('equipment');
            return query.select('*').eq('id', id).single();
        } catch (error) {
            console.error('Equipment getById error:', error);
            throw error;
        }
    }
};
const rentalService = {
    getAll: async ()=>{
        try {
            const query = await supabase.from('rentals');
            return query.select('*');
        } catch (error) {
            console.error('Rental getAll error:', error);
            throw error;
        }
    },
    getById: async (id)=>{
        try {
            const query = await supabase.from('rentals');
            return query.select('*').eq('id', id).single();
        } catch (error) {
            console.error('Rental getById error:', error);
            throw error;
        }
    },
    create: async (data)=>{
        try {
            const query = await supabase.from('rentals');
            return query.insert(data);
        } catch (error) {
            console.error('Rental create error:', error);
            throw error;
        }
    }
};
const dynamicContentService = {
    getPageContent: async (pageKey)=>{
        try {
            const client = await getSupabaseClient();
            const { data, error } = await client.rpc('rpc_dynamic_content_list', {
                p_page_key: pageKey
            });
            if (error) {
                console.error(`Error fetching dynamic page content for page key "${pageKey}":`, error);
                throw error;
            }
            if (!Array.isArray(data)) {
                console.error('Unexpected response format from rpc_dynamic_content_list. Expected an array.');
                throw new Error('Unexpected response format from RPC.');
            }
            return data;
        } catch (error) {
            console.error(`Error in dynamicContentService.getPageContent for pageKey ${pageKey}:`, error);
            throw error;
        }
    }
};
const __TURBOPACK__default__export__ = {
    auth,
    equipmentService,
    rentalService,
    dynamicContentService
};
}}),
"[project]/src/services/news.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "newsService": (()=>newsService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/supabase.ts [app-ssr] (ecmascript)");
;
const handleSupabaseError = (error)=>{
    console.error('Supabase error:', error);
    throw new Error(error.message || 'Error al conectar con el servidor');
};
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second
const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
const retryOperation = async (operation, retries = MAX_RETRIES, delayMs = RETRY_DELAY)=>{
    try {
        return await operation();
    } catch (error) {
        if (retries === 0) throw error;
        await delay(delayMs);
        return retryOperation(operation, retries - 1, delayMs * 2);
    }
};
const newsService = {
    getNewsList: async ()=>{
        return retryOperation(async ()=>{
            try {
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].rpc('rpc_news_list');
                if (error) {
                    handleSupabaseError(error);
                }
                if (!data || !Array.isArray(data) || data.length === 0) {
                    return [];
                }
                const response = data[0];
                if (!response.success) {
                    throw new Error(response.message || 'Error al obtener las noticias');
                }
                const items = response.data.items || [];
                // Fetch details in parallel with error handling
                const detailedItems = await Promise.allSettled(items.map(async (item)=>{
                    try {
                        const detail = await newsService.getNewsDetail(item.id);
                        return {
                            ...item,
                            ...detail
                        };
                    } catch (error) {
                        console.error(`Error fetching detail for news ${item.id}:`, error);
                        return item; // Return the basic item if detail fetch fails
                    }
                }));
                // Filter out failed promises and get successful results
                return detailedItems.filter((result)=>result.status === 'fulfilled').map((result)=>result.value);
            } catch (error) {
                console.error('Error fetching news:', error);
                throw error;
            }
        });
    },
    getNewsDetail: async (id)=>{
        return retryOperation(async ()=>{
            try {
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].rpc('rpc_news_get', {
                    p_id: id
                });
                if (error) {
                    handleSupabaseError(error);
                }
                if (!data || !Array.isArray(data) || data.length === 0) {
                    throw new Error('Noticia no encontrada');
                }
                const response = data[0];
                if (!response.success) {
                    throw new Error(response.message || 'Error al obtener la noticia');
                }
                return response.data;
            } catch (error) {
                console.error('Error fetching news detail:', error);
                throw error;
            }
        });
    },
    // Helper function to get image URL with fallback
    getImageUrl: (item)=>{
        const fallbackImage = '/assets/images/news/default-news.jpg';
        // First try to get the API URL
        if (item.url?.api) {
            return item.url.api;
        }
        // Then try the web URL
        if (item.url?.web) {
            return item.url.web;
        }
        // Fallback to default image
        return fallbackImage;
    },
    // Helper function to get image dimensions
    getImageDimensions: (item)=>{
        const baseStyle = {
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%'
        };
        return {
            width: 400,
            height: 250,
            style: baseStyle
        };
    },
    // Helper function to check if image exists with timeout
    checkImageExists: async (url)=>{
        return retryOperation(async ()=>{
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(()=>controller.abort(), 5000); // 5 second timeout
                const response = await fetch(url, {
                    method: 'HEAD',
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                return response.ok;
            } catch (error) {
                console.error('Error checking image:', error);
                return false;
            }
        });
    }
};
}}),
"[project]/src/app/noticias/noticias.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "badge": "noticias-module__B4wYkW__badge",
  "categoryBadge": "noticias-module__B4wYkW__categoryBadge",
  "contactButton": "noticias-module__B4wYkW__contactButton",
  "contactSection": "noticias-module__B4wYkW__contactSection",
  "container": "noticias-module__B4wYkW__container",
  "expanded": "noticias-module__B4wYkW__expanded",
  "fadeIn": "noticias-module__B4wYkW__fadeIn",
  "fallbackImage": "noticias-module__B4wYkW__fallbackImage",
  "header": "noticias-module__B4wYkW__header",
  "imageWrapper": "noticias-module__B4wYkW__imageWrapper",
  "newsCard": "noticias-module__B4wYkW__newsCard",
  "newsContent": "noticias-module__B4wYkW__newsContent",
  "newsDate": "noticias-module__B4wYkW__newsDate",
  "newsDescription": "noticias-module__B4wYkW__newsDescription",
  "newsGrid": "noticias-module__B4wYkW__newsGrid",
  "newsImage": "noticias-module__B4wYkW__newsImage",
  "newsImageContainer": "noticias-module__B4wYkW__newsImageContainer",
  "newsTitle": "noticias-module__B4wYkW__newsTitle",
  "pageWrapper": "noticias-module__B4wYkW__pageWrapper",
  "slideDown": "noticias-module__B4wYkW__slideDown",
  "subtitle": "noticias-module__B4wYkW__subtitle",
  "tempImage": "noticias-module__B4wYkW__tempImage",
  "title": "noticias-module__B4wYkW__title",
});
}}),
"[project]/src/app/noticias/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NoticiasPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/news.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/noticias/noticias.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function NoticiasPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [newsItems, setNewsItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedNews, setSelectedNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDetailLoading, setIsDetailLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageErrors, setImageErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [imageLoading, setImageLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Fetch news items on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchNews = async ()=>{
            try {
                setIsLoading(true);
                setError(null);
                const items = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newsService"].getNewsList();
                setNewsItems(items);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Error al cargar las noticias';
                setError(errorMessage);
                console.error('Error fetching news:', err);
            } finally{
                setIsLoading(false);
            }
        };
        fetchNews();
    }, []);
    const handleNewsClick = async (id)=>{
        if (expandedId === id) {
            setExpandedId(null);
            setSelectedNews(null);
            return;
        }
        setIsDetailLoading(true);
        try {
            // Since we already have the details from the initial fetch,
            // we can just find the item in our state
            const newsDetail = newsItems.find((item)=>item.id === id);
            if (newsDetail) {
                setSelectedNews(newsDetail);
                setExpandedId(id);
            } else {
                // Fallback to fetching if not found in state
                const detail = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newsService"].getNewsDetail(id);
                setSelectedNews(detail);
                setExpandedId(id);
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Error al cargar la noticia';
            console.error('Error fetching news detail:', err);
            // Fallback to just expanding the card with summary
            setExpandedId(id);
        } finally{
            setIsDetailLoading(false);
        }
    };
    const handleImageError = (id)=>{
        setImageErrors((prev)=>({
                ...prev,
                [id]: true
            }));
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageWrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingSpinner
                        }, void 0, false, {
                            fileName: "[project]/src/app/noticias/page.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Cargando noticias..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/noticias/page.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/noticias/page.tsx",
                    lineNumber: 79,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/noticias/page.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/noticias/page.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageWrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Error al cargar las noticias"
                        }, void 0, false, {
                            fileName: "[project]/src/app/noticias/page.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/noticias/page.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.location.reload(),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].retryButton,
                            children: "Intentar nuevamente"
                        }, void 0, false, {
                            fileName: "[project]/src/app/noticias/page.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/noticias/page.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/noticias/page.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/noticias/page.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageWrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: [
                                "Noticias y ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Novedades"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/noticias/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 51
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/noticias/page.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                            children: "Últimas Actualizaciones"
                        }, void 0, false, {
                            fileName: "[project]/src/app/noticias/page.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                            children: "Mantente informado sobre nuestros nuevos equipos, proyectos exitosos y logros más recientes"
                        }, void 0, false, {
                            fileName: "[project]/src/app/noticias/page.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/noticias/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newsGrid,
                    children: newsItems.map((item)=>{
                        const dimensions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newsService"].getImageDimensions(item);
                        const hasImageError = imageErrors[item.id];
                        const isLoading = imageLoading[item.id];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newsCard} ${expandedId === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expanded : ''}`,
                            onClick: ()=>handleNewsClick(item.id),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newsImageContainer,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryBadge,
                                            children: item.tags[0] || 'Noticia'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/noticias/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageWrapper,
                                            children: [
                                                !hasImageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageLoading,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingSpinner
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/noticias/page.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/noticias/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$news$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newsService"].getImageUrl(item),
                                                            alt: item.title,
                                                            width: dimensions.width,
                                                            height: dimensions.height,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newsImage,
                                                            priority: item.is_featured,
                                                            onError: ()=>handleImageError(item.id),
                                                            onLoadingComplete: ()=>setImageLoading((prev)=>({
                                                                        ...prev,
                                                                        [item.id]: false
                                                                    })),
                                                            onLoadStart: ()=>setImageLoading((prev)=>({
                                                                        ...prev,
                                                                        [item.id]: true
                                                                    })),
                                                            style: dimensions.style
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/noticias/page.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                hasImageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fallbackImage,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/large-hydraulic-excavator-cat-6030-caterpillar.jpg",
                                                        alt: "Imagen por defecto",
                                                        width: dimensions.width,
                                                        height: dimensions.height,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newsImage,
                                                        style: dimensions.style
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/noticias/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/noticias/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/noticias/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/noticias/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newsContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newsDate,
                                            children: new Date(item.created_at).toLocaleDateString('es-ES', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/noticias/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newsTitle,
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/noticias/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this),
                                        isDetailLoading && expandedId === item.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingDetail,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingSpinner
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/noticias/page.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Cargando contenido..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/noticias/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/noticias/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].newsDescription,
                                            children: expandedId === item.id && selectedNews ? selectedNews.content : `${item.summary.slice(0, 100)}...`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/noticias/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 21
                                        }, this),
                                        expandedId === item.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactSection,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/contact",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$noticias$2f$noticias$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactButton,
                                                children: "Contáctenos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/noticias/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/noticias/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/noticias/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/app/noticias/page.tsx",
                            lineNumber: 125,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/noticias/page.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/noticias/page.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/noticias/page.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__84b0add3._.js.map