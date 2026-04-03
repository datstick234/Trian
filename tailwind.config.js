/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004d3f',
          light: '#006b57',
          dark: '#003028',
          50: '#e6f2ef',
          100: '#b3d9d0',
          200: '#80c0b1',
          300: '#4da792',
          400: '#268e73',
          500: '#004d3f',
          600: '#003d32',
          700: '#002e25',
          800: '#001e18',
          900: '#000f0b',
        },
        accent: {
          DEFAULT: '#8B6914',
          light: '#C49A1E',
          dark: '#6B4F0E',
        },
        earth: {
          DEFAULT: '#6B4F2A',
          light: '#9B7A50',
          dark: '#4A3218',
        },
        beige: {
          DEFAULT: '#F5F0E8',
          dark: '#E8E0D0',
          darker: '#D8CDB8',
        },
        foreground: '#1A1A14',
        muted: '#6B6B5A',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'heritage-gradient': 'linear-gradient(135deg, #004d3f 0%, #006b57 50%, #8B6914 100%)',
        'nature-gradient': 'linear-gradient(180deg, rgba(0,77,63,0.9) 0%, rgba(0,48,40,0.6) 50%, rgba(0,0,0,0.3) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'floatY 4s ease-in-out infinite',
        'morph-blob': 'morphBlob 12s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'beam-drop': 'beamDrop 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        morphBlob: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 77, 63, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 77, 63, 0.6)' },
        },
        beamDrop: {
          '0%': { top: '-120px', opacity: '0' },
          '20%': { opacity: '0.6' },
          '80%': { opacity: '0.6' },
          '100%': { top: '100%', opacity: '0' },
        },
      },
      boxShadow: {
        'premium': '0 20px 60px rgba(0, 77, 63, 0.15)',
        'premium-lg': '0 30px 80px rgba(0, 77, 63, 0.2)',
        'card': '0 4px 24px rgba(26, 26, 20, 0.08)',
        'card-hover': '0 12px 40px rgba(26, 26, 20, 0.14)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};