/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#5DA9E9',
        'brand-dark-blue': '#0d3b66',
        'brand-white': '#FFFFFF',
        'brand-light-gray': '#F4F4F9',
        'brand-dark-gray': '#333333',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 4px 12px rgba(0, 0, 0, 0.05)',
        strong: '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        'gradient-pan': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 15s ease infinite',
      },
    },
  },
  plugins: [],
};
