/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleur principale pour le texte
        'adzly-black': '#0F1A33', // Bleu marine foncé du logo
        
        // Couleurs du logo
        'adzly-orange': '#F7941D', // Orange vif du logo
        'adzly-green': '#1D9D73', // Vert émeraude du logo
        
        // Anciennes couleurs (gardées pour compatibilité)
        'adzly-blue': '#F7941D', // Remplacé par l'orange
        'adzly-violet': '#1D9D73', // Remplacé par le vert
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(to right, #1D9D73, #34D399)',
        'gradient-green': 'linear-gradient(to right, #1D9D73, #34D399)',
        'gradient-orange-accent': 'linear-gradient(to right, #F7941D, #FDBA74)',
      },
      boxShadow: {
        'cta': '0 4px 14px 0 rgba(247, 148, 29, 0.39)',
      },
    },
  },
  plugins: [],
}
