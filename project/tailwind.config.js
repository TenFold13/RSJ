/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'brand-orange': '#FF8C42',
        'brand-green': '#4CAF50',
        'brand-teal': '#00796B',
        'brand-light-gray': '#F5F5F5',
        'brand-dark-neutral': '#333333',
        'brand-orange-accent': '#FF5722',
        'brand-white': '#FFFFFF'
      }
    }
  },
  plugins: [],
};