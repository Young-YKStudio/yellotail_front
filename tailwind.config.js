const defaultTheme = require('tailwindcss/defaultTheme')
const forms = require('@tailwindcss/forms')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    forms,
  ],
}
