/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
				exo: ['Exo'],
      },
      colors: {
        display: ["group-hover"],
        cals: {
          900: "#2a2400",
          800: "#524500",
          600: "#796600",
          700: "#b49800",
          500: "#dbb900",//Main
          400: "#efca00",
          300: "#ffdb17",
          200: "#ffe765",
          100: "#fff3b4",
        },
        ugas: {
          900: "#150623",
          800: "#1f0a33",
          700: "#331054",
          600: "#3d1365",
          500: "#511986",//Main
          400: "#6f22b8",
          300: "#832ad7",
          200: "#a96ce4",
          100: "#d0aef0",
        },
        reward: {
          900: "#202e0c",
          800: "#2b3e10",
          700: "#415d18",
          600: "#628c24",
          500: "#78ab2c",//Main
          400: "#8eca34",
          300: "#9fd353",
          200: "#c2e391",
          100: "#edf7df",
        }
      },
    },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
  }
}
