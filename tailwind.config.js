/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#F9F7F7",
        secondary: "#DBE2EF",
        accent: "#3F72AF",
        "accent-dark": "#112D4E",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}

