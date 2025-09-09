/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E63946', // rouge doux
          dark: '#B52C37',
          light: '#F07178',
        },
        neutral: {
          light: '#F5F5F5', // gris clair
          dark: '#1E1E1E',
        },
        text: {
          DEFAULT: '#FAFAFA', // blanc doux
          muted: '#E0E0E0',
        },
      },
    },
  },
  plugins: [],
};
