/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#003F62",
        blueSecondary: "#E2F4FF",
        blueTerciary: "#87BCD9",
        orangePrimary: "#EDA415",
        greyPrimary: "#BABABA",
        greySecondary: "#A5A5A5",
        greyTerciary: "#4A4A4A",
        textBlue: "#1B5A7D",
        textGrey: "#3A3A3A",
        whitePrimary: "#FFFFFF"
      }
    },
  },
  plugins: [],
}