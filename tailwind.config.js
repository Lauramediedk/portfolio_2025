/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    screens: {
      sm: '360px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'body': '#212B38',
      'hero': '#37465B',
      'mousehover': '#566a85',
      'vibrantblue': '#726EFF',
      'vibrantgreen': '#55C1B1',
      'mintgreen': '#5AFFE7',
      'lightgrey': '#F6F6F6',
      'darkgrey': '#84837D',
      'darktext': '#424242',
      'darkblue': '#68838E',
      'bluetext': '#28596E',
      'lightblue': '#8AA2AC',
      'black': '#453F3C',
      'white': '#EFE9E9',
      'defaultwhite': '#FFFFFF',
    },
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}
