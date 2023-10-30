/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '350px',
        'big': '1100px',
        'large': '767px',
        'medium': '600px',
        'small': '450px',
        'xsmall': '300px'
      },
    },
  },
  plugins: [],
}
