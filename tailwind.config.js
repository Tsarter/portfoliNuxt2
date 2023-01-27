/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-transparent': '#000000d4',
        dark: '#191919',
        light_purple: '#837FFF',
        extra_light_purple: '#9996FF',
      },
    },
  },
  plugins: [],
}
