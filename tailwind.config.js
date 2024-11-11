/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // primary: "#082826",
        //   'timber-green': {
        //     '50': '#f1fcf9',
        //     '100': '#d1f6ed',
        //     '200': '#a3ecdb',
        //     '300': '#6ddbc6',
        //     '400': '#3ec3ad',
        //     '500': '#25a794',
        //     '600': '#1b8678',
        //     '700': '#1a6b62',
        //     '800': '#195650',
        //     '900': '#194843',
        //     '950': '#082826',
        // },
        "primary": "#881327",
        'timber-green': {
          '50': '#fff1f3',
          '100': '#ffe4e9',
          '200': '#fecdd5',
          '300': '#fda4b3',
          '400': '#fb7189',
          '500': '#f43f5e',
          '600': '#e11d3f',
          '700': '#be122f',
          '800': '#9f122a',
          '900': '#881327',
          '950': '#4c0511',
      },
      
        
          // secondary: "#11141a",
          secondary: "#4c0511",
        },
        screens: {
          'xs': '375px', 
          'sm': '640px', 
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
      },
    },
    plugins: [],
  }
  