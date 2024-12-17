/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#171717",
        secondaryBlack:"#434343",
        primaryBlue: "#0F0A33",
        primaryGrey:"#696969",
        // primary_linear_gradient:"linear-gradient(45deg, #1967D2, #004DB7)"
      },
    },
  },
  plugins: [],
};
