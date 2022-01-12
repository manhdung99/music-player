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
    extend: {},
  },
  plugins: [],
}