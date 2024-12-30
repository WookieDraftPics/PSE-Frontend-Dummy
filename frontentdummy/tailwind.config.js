/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      backingGreen: '#ecfccb',
      backingGreenHigh: '#ebf8c9',
      switchGreen: '#bef264',
      primButton:'#e49f1e',
      switchButton: '#e49f1e',
      guestButton: '#f2e180',
      textGreen: '#268e3d',
      textGrayish: '#553b3b',
      white: '#ffffff',
      black: '#000000',
      gray: '#958f8f',
      darkmodeBackground: '#142707',
      linkBlue: '#309ae5'
    },
    
    fontFamily: {
      noto: [
        '"Segoe UI"',
        'Roboto',
        'sans-serif',
      ],
    },
    
  },
  plugins: [],
}

