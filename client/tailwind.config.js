/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aqua: {
          400: "#009fbd",
          300: " #00c2cb",
          200: " #5ce1e6",
          100: " #0187ab",
        },
      },
    },
  },
  plugins: [],
};
