const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: 'jit',
  variants: {
    extend: {
      backgroundColor: ['group-hover']
    }
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "960px",
      // => @media (min-width: 960px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
  },},
  },
  plugins: [],
}