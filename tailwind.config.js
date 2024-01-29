/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope-Bold', 'Helvetica', 'sans-serif'],
        'righteous': ['Righteous', 'sans-serif'],
        'poppine' : ['Poppins-SemiBold', 'Helvetica'],
        'poppins': ['Poppins', 'sans-serif'],
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  plugins: [],
}

