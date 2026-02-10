/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['IBM Plex Sans Thai', 'sans-serif'],
        'display': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'neutral': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d8',
          400: '#a1a1a1',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      borderRadius: {
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
      },
      boxShadow: {
        'card': '0 20px 40px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
