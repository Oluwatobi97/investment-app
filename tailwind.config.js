/** @type {import('tailwindcss').Config} */
// const borderGradient = require("tailwindcss-border-gradient-radius");
export default {
  content: [
    "./index.html", // Root HTML file for Vite
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      colors: {
        primary: "#1E293B", // Dark blue - used for headers, primary buttons
        accent: "#2D9CDB", // Bright blue - used for links, highlights
        background: "#F8F9FA", // Light gray - used for backgrounds
        surface: "#FFFFFF", // White - used for cards, input fields
        success: "#27AE60", // Green - used for success messages or indicators
        warning: "#F2C94C", // Yellow - used for warnings
        error: "#EB5757", // Red - used for error messages
        textPrimary: "#1E293B", // Text dark color - primary text
        textSecondary: "#6B7280", // Text gray color - secondary text
      },
    },
  },
  plugins: [],
};
