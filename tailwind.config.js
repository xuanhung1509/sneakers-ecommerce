/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'sneakers-orange': '#ff7d1a',
        'sneakers-orange-pale': '#ffede0',
        'sneakers-blue-dark': '#1d2025',
        'sneakers-blue-grayish': '#b6bcc8',
        'sneakers-blue-grayish-light': '#f7f8fd',
        'sneakers-blue-grayish-dark': '#68707d',
      },
    },
    fontFamily: {
      KumbhSans: "'Kumbh Sans', sans-serif",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
  },
  plugins: [],
};
