/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-blue":"#471AAA",
        "white-body": "#f0f0f0",
        "input-color": "#f4f4f4",
        "dark-body-primary": "#282525",
        "dark-body-secondary": "#313030",
      }
    },
  },
  plugins: [],
}

