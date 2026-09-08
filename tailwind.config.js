/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onefi: {
          purple: {
            50: '#F5F3FF',
            100: '#EDE9FE',
            200: '#DDD6FE',
            300: '#C4B5FD',
            400: '#A78BFA',
            500: '#8B5CF6',
            600: '#7C3AED',
            700: '#6D28D9',
            800: '#5B1CB8',
            900: '#380774',
            dark: '#240645',
          },
          bg: '#F8F9FD',
          card: '#FFFFFF',
          border: '#ECEFF6',
          text: {
            primary: '#111827',
            secondary: '#6B7280',
            muted: '#9CA3AF',
          },
          gold: '#F59E0B',
          goldBg: '#FEF3C7',
          green: '#10B981',
          greenBg: '#D1FAE5'
        }
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 10px -2px rgba(0, 0, 0, 0.05)',
        'float': '0 10px 25px -5px rgba(109, 40, 217, 0.25)',
      }
    },
  },
  plugins: [],
}
