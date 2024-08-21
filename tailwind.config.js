/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],

  theme: {
    screens: {
      'mobile': {'min':'200px','max':'427px'},
      'tablet': {'min':'427px','max':'782px'},
      'laptop': {'min':'782.1px'}
    },
    fontFamily:{
      'redhat-text': ["Red Hat Text", "sans-serif"],
    },
    colors: {
      'fantasy':'#FCF8F6',
      'tiamaria':'#C73B0F',
      'graphite':'#260F08',
      'beaver':'#87635A',
      'pharlap':'#AD8A85',
      'clamshell':'#CAAFA7',
      'dawnpink':'#F5EEEC',
      'mountainmeadow':'#1EA575',
    },
    extend: {},
  },
  plugins: [],
}

