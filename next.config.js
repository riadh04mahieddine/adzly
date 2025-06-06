/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com', // Pour les images de profil Google
      'firebasestorage.googleapis.com', // Pour les images stockées dans Firebase Storage
    ],
  },
};

module.exports = nextConfig;
