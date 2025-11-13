/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0b0c0f",
          50: "#f8f9fb",
          100: "#eef1f5",
          200: "#e3e7ee",
          300: "#cfd6e0",
          400: "#a9b5c7",
          500: "#7f90a6",
          600: "#556a84",
          700: "#394b62",
          800: "#232f42",
          900: "#111a26",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Helvetica", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0,0,0,0.25)",
        glow: "0 0 0 2px rgba(255,255,255,0.06), 0 10px 30px -10px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
