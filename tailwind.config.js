/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        container:' #277870',
        //container:' #B436BF',
        gradientstart: '#CAF2EF', // 0%
        gradientmiddle: '#C9EFDC', // 50%
        gradientend: '#F2BBF1', // 100%
        btncolr:"#277870",
  
        btncolr2:"#277870",
        bgcolr2:"#73D4CB"
      },
      fontFamily:{
        'urban': ["Urbanist"],
      }
    },
  },
  plugins: [],
}
