/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // This is important for dark mode to work
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
  plugins: [],
}
