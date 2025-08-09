/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour améliorer la stabilité
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // Configuration pour éviter les erreurs 404
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  // Configuration pour le développement
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

module.exports = nextConfig;
