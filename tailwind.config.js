/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        container:' #B436BF',
        gradientstart: '#CAF2EF', // 0%
        gradientmiddle: '#C9EFDC', // 50%
        gradientend: '#F2BBF1', // 100%
      },
      fontFamily:{
        'urban': ["Urbanist"],
      }
    },
  },
  plugins: [],
}
