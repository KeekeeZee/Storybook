/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      
      fontFamily: {
      sans: ['Inter', 'sans-serif'], // Définit Inter comme police par défaut
    },
  
    colors: {
      primary: {
        500: '#5A67D8',
        600: '#4C51BF',
        700: '#434190',
      },
      secondary: {
        500: '#319795',
        600: '#2C7A7B',
        700: '#285E61',
      },
      grey: {
        50: '#F7FAFC',
        100: '#EDF2F7',
        200: '#E2E8F0',
        300: '#CBD5E0',
        400: '#A0AEC0',
        500: '#718096',
        600: '#4A5568',
        700: '#2D3748',
        800: '#1A202C',
        900: '#171923',
      },
      success: '#38A169',
      warning: '#D69E2E',
      error: '#E53E3E',
    },
  
  },
  },
  plugins: [
    require('@tailwindcss/typography'),  // Ajoute ici le plugin typography
    require('@tailwindcss/forms'),      // (Optionnel) Formulaires stylés
    require('@tailwindcss/aspect-ratio') // (Optionnel) Ratios d'image
  ],
};

