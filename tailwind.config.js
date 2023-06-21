/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-yellow': '#f8e9c8',
        'main-green': '#deecec',
        'main-black': '#242424',
        'main-white': '#ffffff',
        'main-purple': '#ecd9f7'
      },
      screens: {
        'xxs': { 'min': '350px', 'max': '374px' },
        // => @media (min-width: 350px and max-width: 374px) { ... },

        'xs': { 'min': '375px', 'max': '639px' },
        // => @media (min-width: 375px and max-width: 639px) { ... }

        'sm': { 'min': '640px', 'max': '767px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'md': { 'min': '768px', 'max': '1023px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        'lg': { 'min': '1024px', 'max': '1279px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        'xl': { 'min': '1280px', 'max': '1535px' },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        '2xl': { 'min': '1536px' },
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
  safelist: ['bg-main-yellow', 'bg-main-green', 'bg-main-black', 'bg-main-white', 'bg-main-purple']
}
