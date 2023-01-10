/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Anton: ["Anton", "sans-serif"],
      },

      backgroundImage: (theme) => ({
        grad: "linear-gradient(25deg, rgba(231,235,239,1) 0%, rgba(183,226,247,1) 100%)",
        text: "radial-gradient(circle, rgba(168,251,1,1) 0%, rgba(183,226,247,1) 100%)",
        "sm-text":
          "radial-gradient(circle, rgba(168,251,1,1) 0%, rgba(22,196,67,1) 100%)",
      }),

      colors: {
        cgray: "#EDF3F8",
        csky: "#B7E2F7",
        black: "#000000",
        white: "#FFFFFF",
        cblue: "#093959 ",
        cgreen: "#a8fb01 ",
        hover: "#152848 ",
      },
    },
    screens: {
      xl: { max: "1500px" },
      lg: { max: "1200px" },
      md: { max: "1060px" },
      asm: { max: "970px" },
      sm: { max: "820px" },
      ss: { max: "550px" },
      xs: { max: "375px" },
    },
  },
  plugins: [],
};
