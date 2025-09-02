/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Agricultural theme colors
        'farm-green': {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8bd28b',
          400: '#53b853',
          500: '#2d9c2d', // Primary green
          600: '#218021',
          700: '#1c661c',
          800: '#195119',
          900: '#164316',
        },
        'harvest-yellow': {
          50: '#fffcea',
          100: '#fff4c5',
          200: '#ffe885',
          300: '#ffd546',
          400: '#ffc01b',
          500: '#ffa500', // Primary yellow/orange
          600: '#e27f00',
          700: '#bb5a00',
          800: '#984600',
          900: '#7c3900',
        },
        'sky-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        'hindi': ['Noto Sans Devanagari', 'sans-serif'],
        'marathi': ['Noto Sans Devanagari', 'sans-serif'],
      },
    },
  },
  plugins: [],
}