/** @type {import('tailwindcss').Config} */

export default {
  enabled: true,
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["DM Sans", "sans-serif"],
      },
      colors: {
        'primary': '#EE2C31',
        'secondary': '#111926',
        'gray': '#222836',
        'textGray': '#707070',
        'grayLight': '#ECEDEC',
        'dark': '#03030A',

        'success': '#39B54A',
        'danger': '#ff0003',
        'warning': '#ff8f3c',
        'info': '#1ba2db',
        'review': '#F9AC00',

        'heading': '#222836',
        'body': '#25262b',
        
        'borderLight': '#e5e5e5',
        'borderDark': '#2B364A',
      },
      keyframes: {
        btnIconSlide: {
          '0%, 100%': { transform: 'translateY(0)' },
          '40%, 80%': { opacity: '0' },
          '40%': { transform: 'translateY(-5px)' },
          '80%': { transform: 'translateY(5px)' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        btnIconSlide: 'btnIconSlide 400ms',
      }
    },
  },
  plugins: [],
};
