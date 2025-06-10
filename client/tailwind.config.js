// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        volkhov: ["Volkhov", "serif"],
      },
      animation: {
        "slide-in": "slide-in 0.3s ease-out forwards",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        }, // 👈 this comma was missing
      },
    },
  },
  plugins: [],
};
