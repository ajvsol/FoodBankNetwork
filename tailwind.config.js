/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'peachey': '#F5F5F5'
    }
  },
  plugins: [ require('tailwind-scrollbar'),
],
  mode: 'jit'
  
}