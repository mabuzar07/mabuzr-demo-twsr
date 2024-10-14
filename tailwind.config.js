/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        header: "148px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(360deg, rgba(68, 51, 255, 0.08) 0%, rgba(41, 31, 153, 0.08) 100%)",
      },
      colors: {
        primary: "#040033",
        secondary: "#4B42F4",
        background: "#F3F4F6",
        primaryFont: "#A39FD2",
        danger: "#FF7067",
        success: "#26CA54",
        fontGrey: "#9894BC",
        lightGrey: "#5F6575",
        bodyTextColor: "#353A44",
        bodyTextSecondary: "#21215B",
        bodyTextDefault: "#2C2C7A",
        darkGrey: "#212330",
      },
    },
  },
  plugins: [],
};
