/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd',
          400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9',
          800: '#5b21b6', 900: '#4c1d95',
          DEFAULT: '#6366f1', dark: '#4f46e5', light: '#818cf8',
        },
        secondary: { DEFAULT: '#ec4899', light: '#f472b6', dark: '#db2777' },
        accent: '#f59e0b',
        success: '#10b981',
        danger: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      zIndex: {
        fixed: '1030',
        sticky: '1020',
        modal: '1050',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(99,102,241,0.25)',
        card: '0 4px 20px rgba(0,0,0,0.06)',
      },
      animation: {
        wave: 'wave 2s infinite',
        scroll: 'scroll 2s infinite',
        fadeIn: 'fadeIn 0.6s ease-out',
        slideInUp: 'slideInUp 0.8s ease-out',
        slideInDown: 'slideInDown 0.8s ease-out',
        slideInLeft: 'slideInLeft 0.8s ease-out',
        slideInRight: 'slideInRight 0.8s ease-out',
        scaleIn: 'scaleIn 0.6s ease-out',
        glow: 'glow 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        gradientMove: 'gradientMove 6s ease infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-8deg)' },
          '60%': { transform: 'rotate(14deg)' },
          '80%': { transform: 'rotate(-4deg)' },
        },
        scroll: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(12px)' },
        },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideInUp: { from: { opacity: '0', transform: 'translateY(40px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideInDown: { from: { opacity: '0', transform: 'translateY(-40px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideInLeft: { from: { opacity: '0', transform: 'translateX(-40px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        slideInRight: { from: { opacity: '0', transform: 'translateX(40px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        scaleIn: { from: { opacity: '0', transform: 'scale(0.9)' }, to: { opacity: '1', transform: 'scale(1)' } },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(99,102,241,0.5), 0 0 10px rgba(99,102,241,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(99,102,241,0.8), 0 0 30px rgba(99,102,241,0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}