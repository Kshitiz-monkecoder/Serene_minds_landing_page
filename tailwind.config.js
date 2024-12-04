/* eslint-disable no-undef */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        garamond: ["Garamond", "serif"],
      },
      animation: {
        scroll: "scrollLinear 10s linear infinite",
      },
      keyframes: {
        scrollLinear: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
    },
  },
  plugins: [],
},
};