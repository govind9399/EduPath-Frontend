/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables manual dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gpt: {
          bg: "#121212",        // Page background
          surface: "#1E1E1E",   // Cards/panels
          border: "#2A2A2A",    // Divider/borders
          text: "#ECECEC",      // Primary text
          muted: "#AFAFAF",     // Secondary text
          accent: "#10A37F",    // ChatGPT green
        },
      },
      fontFamily: {
        gpt: ['Inter', 'system-ui', 'sans-serif'], // ChatGPT font stack
      },
    },
  },
  plugins: [],
};
