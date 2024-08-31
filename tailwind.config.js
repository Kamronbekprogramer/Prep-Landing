module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    fontFamily: {
      HelveticaNeues: ["HelveticaNeues", "sans-serif"],
    },
  },
  plugins: [],
};
