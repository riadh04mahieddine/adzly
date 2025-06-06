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
        'adzly-black': '#000000',
        
        // Couleurs pour le dégradé CTA
        'adzly-blue': '#2563EB',
        'adzly-violet': '#8B5CF6',
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(to right, #2563EB, #8B5CF6)',
      },
      boxShadow: {
        'cta': '0 4px 14px 0 rgba(139, 92, 246, 0.39)',
      },
    },
  },
  plugins: [],
}
