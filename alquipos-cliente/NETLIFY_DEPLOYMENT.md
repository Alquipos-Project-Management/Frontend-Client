# Guía de Despliegue en Netlify

Esta guía detalla los pasos para desplegar la aplicación Next.js de Alquipos en Netlify.

## Prerrequisitos

1. Una cuenta en [Netlify](https://www.netlify.com/)
2. El código fuente de la aplicación en un repositorio Git (GitHub, GitLab, Bitbucket)
3. [Netlify CLI](https://docs.netlify.com/cli/get-started/) (opcional)

## Configuración Manual (Interfaz Web)

### 1. Preparación del Proyecto

Asegúrate de que tu proyecto incluya los siguientes archivos:

- `netlify.toml` (ya incluido en el repositorio)
- El paquete `@netlify/plugin-nextjs` como dependencia de desarrollo

### 2. Despliegue en Netlify

1. Inicia sesión en tu cuenta de Netlify
2. Haz clic en "New site from Git"
3. Selecciona tu proveedor de Git (GitHub, GitLab, Bitbucket)
4. Autoriza a Netlify y selecciona el repositorio
5. Configura las opciones de construcción:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Expande "Advanced build settings" y agrega las variables de entorno:
   - `NEXT_PUBLIC_SUPABASE_URL`: Tu URL de Supabase
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Tu clave anónima de Supabase
7. Haz clic en "Deploy site"

### 3. Configuración Post-Despliegue

1. Ve a **Settings > Build & deploy > Continuous Deployment**
2. En "Build settings", verifica que la configuración de compilación sea correcta
3. Ve a **Settings > Functions** y asegúrate de que la configuración coincida con tu `netlify.toml`
4. Opcional: Configura un dominio personalizado en **Domain settings**

## Despliegue con Netlify CLI

### 1. Instalación y Autenticación

```bash
# Instalar Netlify CLI
npm install netlify-cli -g

# Autenticarse con Netlify
netlify login
```

### 2. Inicializar Proyecto

```bash
# Inicializar el proyecto con Netlify
netlify init
```

Sigue las instrucciones para:
- Crear un nuevo sitio o elegir uno existente
- Configurar el comando de construcción (`npm run build`)
- Establecer el directorio de publicación (`.next`)

### 3. Configuración del Entorno

```bash
# Configurar variables de entorno
netlify env:set NEXT_PUBLIC_SUPABASE_URL "tu-url-de-supabase"
netlify env:set NEXT_PUBLIC_SUPABASE_ANON_KEY "tu-clave-anónima-de-supabase"
```

### 4. Despliegue

```bash
# Construcción y despliegue
netlify deploy --prod
```

## Solución de Problemas Comunes

### Error 404 en Rutas Dinámicas

Si experimentas errores 404 en rutas dinámicas, verifica:

1. La configuración de redireccionamiento en `netlify.toml`
2. Que el plugin `@netlify/plugin-nextjs` esté correctamente instalado
3. Los logs de las funciones de Netlify en el panel de administración

### Fallos en las Funciones de Netlify

Si las funciones serverless no funcionan correctamente:

1. Revisa los logs en Netlify Dashboard > Functions
2. Verifica las redirecciones en el archivo `netlify.toml`
3. Comprueba que la configuración de Next.js sea compatible con Netlify

### Problemas con el Entorno

Si hay problemas relacionados con variables de entorno:

1. Verifica que estén correctamente configuradas en Netlify
2. Asegúrate de que los nombres comiencen con `NEXT_PUBLIC_` para variables accesibles en el cliente
3. Reconstruye el sitio después de modificar variables de entorno

## Recursos Adicionales

- [Documentación oficial de Netlify para Next.js](https://docs.netlify.com/integrations/frameworks/next-js/overview/)
- [Repositorio del plugin Next.js para Netlify](https://github.com/netlify/next-runtime)
- [Guía de despliegue de Next.js](https://nextjs.org/docs/deployment)

## Comandos Útiles

```bash
# Ver logs en tiempo real
netlify logs:function nextjs-server

# Reiniciar despliegue
netlify deploy --prod --build

# Borrar caché de Netlify
netlify build --clear-cache
``` 