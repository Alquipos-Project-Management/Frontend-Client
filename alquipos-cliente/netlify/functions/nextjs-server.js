// Esta función maneja las peticiones del servidor Next.js en Netlify
// Incluye manejo para renderizado del lado del servidor y navegación
const path = require('path');
const fs = require('fs');

exports.handler = async (event, context) => {
  console.log(`Request path: ${event.path}`);
  console.log(`Request method: ${event.httpMethod}`);
  console.log(`Request headers:`, JSON.stringify(event.headers, null, 2));

  // Intentar servir archivos estáticos desde el directorio .next
  const staticFilePath = path.join(process.cwd(), '.next', 'static', event.path.replace(/^\/_next\/static\//, ''));
  
  try {
    if (event.path.startsWith('/_next/static/') && fs.existsSync(staticFilePath)) {
      console.log(`Serving static file: ${staticFilePath}`);
      const fileContent = fs.readFileSync(staticFilePath);
      
      // Determinar el tipo de contenido basado en la extensión del archivo
      const ext = path.extname(staticFilePath);
      const contentTypeMap = {
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml',
      };
      
      return {
        statusCode: 200,
        headers: {
          'Content-Type': contentTypeMap[ext] || 'text/plain',
          'Cache-Control': 'public, max-age=31536000, immutable'
        },
        body: fileContent.toString('base64'),
        isBase64Encoded: true
      };
    }
    
    // En un entorno de producción real, esto importaría y llamaría al servidor Next.js
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html",
      },
      body: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alquipos - Alquiler de Equipos</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: #f8f9fa;
      color: #343a40;
    }
    header {
      background-color: #343a40;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      text-align: center;
    }
    .btn {
      display: inline-block;
      background-color: #007bff;
      color: white;
      padding: 0.5rem 1.5rem;
      text-decoration: none;
      border-radius: 0.25rem;
      margin-top: 1.5rem;
      font-weight: bold;
    }
    footer {
      background-color: #343a40;
      color: white;
      text-align: center;
      padding: 1rem;
      margin-top: 2rem;
    }
    .error-details {
      background-color: #f8d7da;
      color: #721c24;
      padding: 1rem;
      border-radius: 0.25rem;
      margin-top: 1rem;
      text-align: left;
      max-width: 800px;
    }
    .navigation {
      margin-top: 2rem;
    }
    .navigation a {
      margin: 0 0.5rem;
      color: #007bff;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <header>
    <h1>Alquipos</h1>
  </header>
  <main>
    <h2>Bienvenido a Alquipos</h2>
    <p>Equipos de construcción, andamios y herramientas disponibles para alquiler</p>
    <p>Ruta actual: ${event.path || '/'}</p>
    <div class="navigation">
      <a href="/">Inicio</a>
      <a href="/productos">Productos</a>
      <a href="/servicios">Servicios</a>
      <a href="/contacto">Contacto</a>
    </div>
  </main>
  <footer>
    &copy; ${new Date().getFullYear()} Alquipos - Todos los derechos reservados
  </footer>
</body>
</html>`,
    };
  } catch (error) {
    console.error("Error en el servidor Next.js:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "text/html",
      },
      body: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error - Alquipos</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: #f8f9fa;
      color: #343a40;
    }
    header {
      background-color: #343a40;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      text-align: center;
    }
    .error-details {
      background-color: #f8d7da;
      color: #721c24;
      padding: 1rem;
      border-radius: 0.25rem;
      margin-top: 1rem;
      text-align: left;
      max-width: 800px;
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <header>
    <h1>Alquipos</h1>
  </header>
  <main>
    <h2>Error del Servidor</h2>
    <p>Ha ocurrido un error al procesar tu solicitud.</p>
    <div class="error-details">
      <strong>Detalles del error:</strong>
      ${error.message}
      
      <strong>Ruta:</strong> ${event.path}
      
      <strong>Método:</strong> ${event.httpMethod}
    </div>
    <a href="/" style="margin-top: 2rem; color: #007bff;">Volver al inicio</a>
  </main>
  <footer style="background-color: #343a40; color: white; text-align: center; padding: 1rem; margin-top: 2rem;">
    &copy; ${new Date().getFullYear()} Alquipos - Todos los derechos reservados
  </footer>
</body>
</html>`,
    };
  }
}; 