// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["cdn.sanity.io"], // Add allowed domains for images
    },
    
    async headers() {
      return [
        {
          // Apply headers to all API routes
          source: '/api/(.*)',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*', // Allow all origins (for development, change in production)
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, OPTIONS', // Allowed methods
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'Content-Type, Authorization', // Allowed headers
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  