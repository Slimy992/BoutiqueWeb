/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  //Purge Ici
  darkMode : 'class',
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        Rolling: 'Rolling 10s linear infinite',
        Rolling2: 'Rolling2 10s linear infinite',
      },
      keyframes: {
        Rolling: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        Rolling2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
