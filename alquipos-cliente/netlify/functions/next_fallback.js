// Función para manejar las rutas de Next.js en Netlify
exports.handler = async (event, context) => {
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
          <title>Alquipos</title>
          <script>
            // Redirigir al router de Next.js
            window.location.href = "/";
          </script>
        </head>
        <body>
          <p>Redirigiendo...</p>
        </body>
      </html>`,
  };
}; 