/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["res.cloudinary.com", "raw.githubusercontent.com"],
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false, path: false };
        return config;
      },
  };
  
  export default nextConfig;
  