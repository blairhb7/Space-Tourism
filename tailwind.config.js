/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    boxShadow: {
      '3xl': '0 0 10px 1px #48abe0',
    },
    extend: {
      backgroundImage: {
        'Home-desktop-background': 'url("/assets/home/background-home-desktop.jpg")',
        'Home-tablet-background': 'url("/assets/home/background-home-tablet.jpg")',
        'Home-mobile-background': 'url("/assets/home/background-home-mobile.jpg")',
        'destination-desktop-background': 'url("/assets/destination/background-destination-desktop.jpg")',
        'destination-tablet-background': 'url("/assets/destination/background-destination-tablet.jpg")',
        'destination-mobile-background': 'url("/assets/destination/background-destination-mobile.jpg")',
    },
  },
  plugins: [],
}
}
