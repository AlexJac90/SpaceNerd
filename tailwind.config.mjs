/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        void: {
          950: '#05060a',
          900: '#0a0c14',
          850: '#0f121f',
          800: '#14182a',
        },
        nebula: {
          DEFAULT: '#6eb5ff',
          dim: '#4a8fd4',
          glow: '#9fd4ff',
        },
        dusk: '#c4b5fd',
      },
      fontFamily: {
        display: ['"Syne"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(110, 181, 255, 0.18), transparent)',
        'grid-soft':
          'linear-gradient(rgba(110, 181, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 181, 255, 0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
