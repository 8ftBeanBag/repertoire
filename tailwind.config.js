/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'dancing': 'dancing'
      },
      colors: {
        lavender: "#BB99D6",
        "ultra-violet": "#654597",
        "blue-m": "#F2DCFA",
        mauve: "#E2ADF2",
      }
    }
  },
  plugins: []
};