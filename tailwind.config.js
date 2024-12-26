/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#171717",
        secondaryBlack:"#434343",
        primaryBlue: "#0F0A33",
        secondaryBlue:"#1A1347",
        primaryGrey:"#696969",
        headingBGColor:"#150F43",
        // primary_linear_gradient:"linear-gradient(45deg, #1967D2, #004DB7)"
      },
    },
  },
  plugins: [],
};
