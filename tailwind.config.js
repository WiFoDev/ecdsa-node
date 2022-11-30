/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f0e17",
        headline: "#fffffe",
        parragraf: "#a7a9be",
        "button-text": "#fffffe",
        primary: "#ff8906",
        secondary: "#f25f4c",
        tertiary: "#e53170",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #ff8906 7.21%, #f25f4c 45.05%, #e53170 78.07%)",
      }),
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      content: {
        example: "url('../assets/brush.png')",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translate3d(100%, 0, 0)",
          },

          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        "slide-in-right": "slideIn 0.2s ease-in",
      },
      boxShadow: {
        outer:
          "6px 6px 10px -1px rgba(0,0,0,0.15), -1px -1px 10px -1px rgba(255,255,255,0.7)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill,minmax(18rem,1fr))",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      standar: "90rem",
    },
  },
  plugins: [],
};
