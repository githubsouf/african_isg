/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      colors: {
        primary: '#f9d322',
        secondary: '#e32b24',
        accent: '#305d3b',
        light: '#eae9df',
      },
    },
  },
  plugins: [],
};