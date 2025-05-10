# Deploying to Netlify

This guide provides instructions for deploying this Next.js application to Netlify.

## Prerequisites

- A Netlify account
- Access to this Git repository

## Deployment Steps

### Option 1: Deploy via Netlify UI

1. Log in to your Netlify account
2. Click "New site from Git"
3. Select your Git provider (GitHub, GitLab, etc.)
4. Authorize Netlify and select this repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Show advanced" and add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
7. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI: `npm install netlify-cli -g`
2. Log in to Netlify: `netlify login`
3. Initialize site: `netlify init`
4. Follow the prompts to connect to your Netlify account
5. Configure environment variables:
   ```
   netlify env:set NEXT_PUBLIC_SUPABASE_URL your-project-url
   netlify env:set NEXT_PUBLIC_SUPABASE_ANON_KEY your-anon-key
   ```
6. Deploy: `netlify deploy --prod`

## Environment Variables

Make sure to set these environment variables in Netlify:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Troubleshooting

If you encounter any issues:

1. Check that the `@netlify/plugin-nextjs` plugin is installed and configured
2. Verify your environment variables are set correctly
3. Check the build logs for any errors
4. Make sure your Supabase project is accessible from Netlify

## Additional Resources

- [Netlify Next.js Plugin Documentation](https://github.com/netlify/netlify-plugin-nextjs)
- [Next.js on Netlify Documentation](https://docs.netlify.com/frameworks/next-js/overview/)
- [Environment Variables in Netlify](https://docs.netlify.com/environment-variables/overview/) 