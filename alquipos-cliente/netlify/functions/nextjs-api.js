// Esta función maneja las peticiones a la API de Next.js en Netlify
exports.handler = async (event, context) => {
  console.log(`API Request path: ${event.path}`);
  console.log(`API Request method: ${event.httpMethod}`);
  console.log(`API Request headers:`, JSON.stringify(event.headers, null, 2));
  console.log(`API Request body:`, event.body || 'No body');

  try {
    // Extraer el endpoint de la API desde la ruta
    const pathSegments = event.path.split('/');
    const apiEndpoint = pathSegments[pathSegments.length - 1];
    
    // En un entorno de producción real, esto importaría y llamaría a las rutas de la API de Next.js
    // Por ahora, devuelve una respuesta de ejemplo para evitar errores 404
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Access-Control-Allow-Origin": "*", // Para CORS
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS"
      },
      body: JSON.stringify({
        success: true,
        message: "API de Next.js funcionando en Netlify",
        endpoint: apiEndpoint,
        path: event.path,
        method: event.httpMethod,
        timestamp: new Date().toISOString(),
      }),
    };
  } catch (error) {
    console.error("Error en la API de Next.js:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        error: "Error en el servidor",
        message: error.message,
        path: event.path,
        timestamp: new Date().toISOString()
      }),
    };
  }
}; 