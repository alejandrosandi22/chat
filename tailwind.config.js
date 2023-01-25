/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      white: {
        DEFAULT: '#ffffff',
        secondary: '#f6f6f6',
      },
      black: {
        DEFAULT: '#000000',
        secondary: '#060606',
      },
      primary: {
        50: '#F3F7F6',
        100: '#DAE7E4',
        200: '#BCD3CE',
        300: '#A9C7C0',
        400: '#90B6AE',
        500: '#35AC90',
        600: '#2B8C76',
        700: '#206857',
        800: '#184E41',
        900: '#0E2F27',
      },
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b4b4b',
        700: '#373737',
        800: '#1f1f1f',
        900: '#0a0a0a',
      },
      red: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
      },
      green: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
    },
    extend: {},
  },
  plugins: [],
};