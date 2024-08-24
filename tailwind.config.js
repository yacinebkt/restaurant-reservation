/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6316db',
        black900: '#141B13',
        paper: '#FFFFFF',
      },
      fontFamily: {
        Cairo: ['Cairo', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
      },
      screens: {
        xs: '340px',
        mb: '460px',
      },
  
    },
  },
  plugins: [],

  corePlugins: {
    preflight: false,
  },
};
