/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10b981", // Emerald
        secondary: "#fbbf24", // Amber
        dark: "#030712", // Slate 950
      },
    },
  },
  plugins: [],
}
