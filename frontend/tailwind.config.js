/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        blood: {
          DEFAULT: "#b91c1c",
          dark: "#7f1d1d",
        },
      },
    },
  },
  plugins: [],
};
