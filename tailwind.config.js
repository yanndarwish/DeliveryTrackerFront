const twElements = require('tw-elements/dist/plugin.cjs');

module.exports = {
  content: [
    './src/renderer/**/*.{js,jsx,ts,tsx,ejs}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [twElements],
};
