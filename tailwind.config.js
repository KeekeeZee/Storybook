/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Définit Inter comme police par défaut
      },
      fontSize: {
        "heading-1": ["3rem", { lineHeight: "58px", fontWeight: "700" }], // Heading 1
        "heading-2": ["2.5rem", { lineHeight: "46px", fontWeight: "700" }], // Heading 2
        "heading-3": ["1.5rem", { lineHeight: "31px", fontWeight: "700" }], // Heading 3
        "heading-4": ["1.25rem", { lineHeight: "28px", fontWeight: "700" }], // Heading 4
        base: ["1rem", { lineHeight: "1.5", fontWeight: "400" }], // Texte normal
        caption: ["0.75rem", { lineHeight: "1.25", fontWeight: "400" }], // Légendes
      },
      colors: {
        primary: {
          500: "#5A67D8",
          600: "#4C51BF",
          700: "#434190",
        },
        secondary: {
          500: "#319795",
          600: "#2C7A7B",
          700: "#285E61",
        },
        grey: {
          50: "#F7FAFC",
          100: "#EDF2F7",
          200: "#E2E8F0",
          300: "#CBD5E0",
          400: "#A0AEC0",
          500: "#718096",
          600: "#4A5568",
          700: "#2D3748",
          800: "#1A202C",
          900: "#171923",
        },
        success: "#38A169",
        warning: "#D69E2E",
        error: "#E53E3E",
        body: {
          primary: "#1A202C", // Texte principal
          "primary-negative": "#EDF2F7", // Texte inversé
          secondary: "#718096", // Texte secondaire
          "secondary-negative": "#A0AEC0", // Texte secondaire clair
        },
        surface: "#F7FAFC", // Surface des cartes
        "page-background": "#E2E8F0", // Fond global
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Plugin pour la typographie avancée
    require("@tailwindcss/forms"), // Plugin pour les formulaires
    require("@tailwindcss/aspect-ratio"), // Plugin pour les images
  ],
};
