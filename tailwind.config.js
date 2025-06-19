/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        "bloo":"#00BCF1",
        "blu":"#172B75",
      },
      screens:{
        'mobile':{'max':'480px'},
        'tablet':{'max':'768px'},
        'laptop':{'max':'1024px'},
        'desktop':{'max':'1280px'},
      }
    },
  },
  plugins: [],
}

