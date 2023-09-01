/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#232536",
        yellow: "#FFD050",
        purple: "#592EA9",
        darkGray: "#4C4C4C",
        mediumGrey: "#6D6E76",
        lightYellow: "#FBF6EA",
        lightGrey: "#F4F4F4",
        border: "#E1E2EC",
        lavender: "#F4F0F8",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Sen: ["Sen", "sans-serif"],
      },
      fontSize: {
        XH1: "56px",
        H1: "48px",
        H2: "36px",
        H3: "28px",
        H4: "24px",
        H5: "20px",
        H6: "16px",
        small: "14px",
      },
    },
  },
  plugins: [],
};
