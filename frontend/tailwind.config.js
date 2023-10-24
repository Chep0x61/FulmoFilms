/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'darky': '#171717',
        'cloudy': '#282828',
        'smoky': '#343434',
        'test': '#545454'
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
      },
      fontFamily: {
        'm_poppins': ['m_poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

