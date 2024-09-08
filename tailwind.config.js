/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide"),],
}

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./node_modules/flowbite/**/*.js"
//   ],
//   plugins: [
//     require('flowbite/plugin')
//   ],
// };
