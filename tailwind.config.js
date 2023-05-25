const daisyUi = require('daisyui')

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  daisyui: {
    themes: ['winter'],
  },
  variants: {
    extend: {},
  },
  plugins: [daisyUi],
};
