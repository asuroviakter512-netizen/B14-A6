/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: { extend: { colors: { ink: '#10110f', panel: '#191a17', lime: '#ccff00', muted: '#a2a49a' }, fontFamily: { display: ['Arial Narrow', 'Impact', 'sans-serif'] } } },
  plugins: [],
};
