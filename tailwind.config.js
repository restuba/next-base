/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear-orange': 'linear-gradient(180deg, #FCB04E 0%, #F2832A 47%, #ED7C2E 86%, #F89A42 100%)'
      },
      colors: {
        primary: '#4285F4'
      },
      boxShadow: {
        'card-hover': '0px 0px 999px 999px rgba(255, 255, 255, 0.15)'
      }
    },
    screens: {
      // => @media (min-width: 360px) { ... }
      mobileS: '360px',
      // => @media (min-width: 480px) { ... }
      mobileM: '480px',
      // => @media (min-width: 640px) { ... }
      mobileL: '640px',
      // => @media (min-width: 768px) { ... }
      tablet: '768px',
      // => @media (min-width: 960px) { ... }
      laptop: '960px',
      // => @media (min-width: 1024px) { ... }
      laptopM: '1024px',
      // => @media (min-width: 1280px) { ... }
      laptopL: '1280px',
      // => @media (min-width: 1440px) { ... }
      desktopL: '1440px',
      // => @media (min-width: 1920px) { ... }
      desktopFullHD: '1920px'
    }
  },
  plugins: []
};
