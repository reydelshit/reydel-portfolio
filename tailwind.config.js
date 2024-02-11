/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#f2f3f7",
        "primary-color": "#163435",
      },
      fontFamily: {
        "main-font": ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
