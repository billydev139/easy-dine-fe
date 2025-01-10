// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primaryBlack: "#171717",
//         secondaryBlack:"#434343",
//         primaryBlue: "#0F0A33",
//         secondaryBlue:"#1A1347",
//         primaryGrey:"#696969",
//         headingBGColor:"#150F43",
//         headingSecondaryColor: "#7B68FF"
//         // primary_linear_gradient:"linear-gradient(45deg, #1967D2, #004DB7)"
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable dark mode using a class
  theme: {
    extend: {
      colors: {
        primaryBlack: "#171717",
        secondaryBlack: "#434343",
        primaryBlue: "#222630",
        secondaryBlue: "#0F0A33",
        primaryGrey: "#696969",
        headingBGColor: "#150F43",
        headingSecondaryColor: "#7B68FF",
        lightBackground: "#FFFFFF",
        lightText: "#000000",
        darkBackground: "#171717",
        darkText: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
