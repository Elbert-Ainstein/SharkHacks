/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Questrial", "monospace"]
      }
    },
  },
  plugins: [require("daisyui")],
};
