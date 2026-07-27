/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        mist: '#EEF2EF',
        paper: '#FFFFFF',
        ink: '#16211C',
        brass: '#A9812E',
        crimson: '#9B3A34',
        pine: '#3F6B52',
        line: '#C7CFC7',
      },
      fontFamily: {
        display: ['Spectral', 'serif'],
        sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
