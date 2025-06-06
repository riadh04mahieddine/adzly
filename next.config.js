/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com', // Pour les images de profil Google
      'firebasestorage.googleapis.com', // Pour les images stockées dans Firebase Storage
    ],
  },
  // Désactiver ESLint pendant le build pour le déploiement
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Désactiver la vérification des types TypeScript pendant le build
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
