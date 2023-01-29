const defaultTheme = require('tailwindcss/defaultTheme')
const { InteractionMediaQueries } = require('@area17/a17-tailwind-plugins')
const plugin = require('tailwindcss/plugin')
const { fontFamily } = require('tailwindcss/defaultTheme')

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    },
  })
})

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontSize: {
        '4.5xl': '2.5rem', // 34px
        '2xs': '0.625rem', // 10px
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        carbon: 'Carbon, monospace',
        defaultSans: [...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      opacity: {
        3: '0.03',
        4: '0.04',
        6: '0.06',
        7: '0.07',
        15: '0.15',
      },
      scale: {
        60: '0.6',
        80: '0.8',
        85: '0.85',
      },
      rotate: {
        8: '8deg',
        9: '9deg',
        10: '10deg',
        11: '11deg',
        16: '16deg',
        24: '24deg',
      },
      spacing: {
        4.5: '1.125rem', // 18px
        13: '3.25rem', // 52px
        15: '3.75rem', // 60px
        17: '4.25rem', // 68px
        18: '4.5rem', // 72px
        62: '4.5rem', // 72px
      },
      backdropBlur: {
        xs: '3px',
      },
      aspectRatio: {
        '4/6': '4 / 6',
      },
      flex: {
        2: '2 2 0%',
      },
      transitionProperty: {
        spacing: 'margin, padding',
        padding: 'padding',
      },
      transitionDuration: {
        DEFAULT: '150ms',
        250: '250ms',
        400: '400ms',
        600: '600ms',
        slow: '1000ms',
      },
      transitionDelay: {
        DEFAULT: '0ms',
        0: '0ms',
        250: '250ms',
        350: '350ms',
        400: '400ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      scale: {
        80: '0.8',
        70: '0.7',
        105: '1.05',
        110: '1.1',
        115: '1.15',
        120: '1.2',
      },
      screens: {
        '3xl': '1600px',
      },
      colors: {
        tint: {
          50: withOpacityValue('--tint-purple'),
          100: withOpacityValue('--tint-blue'),
        },
        primary: {
          DEFAULT: withOpacityValue('--color-primary'),
          50: withOpacityValue('--color-primary-50'),
          100: withOpacityValue('--color-primary-100'),
          200: withOpacityValue('--color-primary-200'),
          300: withOpacityValue('--color-primary-300'),
          400: withOpacityValue('--color-primary-400'),
          500: withOpacityValue('--color-primary-500'),
          600: withOpacityValue('--color-primary-600'),
          700: withOpacityValue('--color-primary-700'),
          800: withOpacityValue('--color-primary-800'),
          900: withOpacityValue('--color-primary-900'),
          950: withOpacityValue('--color-primary-950'),
          1000: withOpacityValue('--color-primary-1000'),
        },
        secondary: {
          DEFAULT: withOpacityValue('--color-secondary'),
          50: withOpacityValue('--color-secondary-50'),
          100: withOpacityValue('--color-secondary-100'),
          200: withOpacityValue('--color-secondary-200'),
          300: withOpacityValue('--color-secondary-300'),
          400: withOpacityValue('--color-secondary-400'),
          500: withOpacityValue('--color-secondary-500'),
          600: withOpacityValue('--color-secondary-600'),
          700: withOpacityValue('--color-secondary-700'),
          800: withOpacityValue('--color-secondary-800'),
          900: withOpacityValue('--color-secondary-900'),
          950: withOpacityValue('--color-secondary-950'),
          1000: withOpacityValue('--color-secondary-1000'),
        },
        dev: 'var(--color-dev)',
        title: {
          DEFAULT: withOpacityValue('--color-title-light'),
          dark: withOpacityValue('--color-title-dark'),
        },
      },
      gridTemplateRows: { 8: 'repeat(8, minmax(0, 1fr))' },
      // gridTemplateColumns: {
      //   auto: 'repeat(auto-fit, minmax(min(16rem, 100%), 1fr))',
      //   'auto-three': 'repeat(auto-fit, minmax(min(12rem, 100%), 1fr))',
      // },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%': { opacity: '0.3' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.3' },
        },
        notification: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        rotating: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        tooltip: 'appear 0.15s ease-out',
        'rotating-faster': 'rotating 30s linear infinite',
        'rotating-fast': 'rotating 45s linear infinite',
        rotating: 'rotating 60s linear infinite',
        'rotating-slow': 'rotating 90s linear infinite',
        'rotating-slower': 'rotating 120s linear infinite',
        blink: 'blink 1s linear infinite',
        notification:
          '2s cubic-bezier(0.4, 0.0, 0.2, 1) 0s infinite normal none running notification',
        notificationdelayed:
          '2s cubic-bezier(0.4, 0.0, 0.2, 1) 0.25s infinite normal none running notification',
      },
      screens: {
        mobile: { max: defaultTheme.screens.md }, // Up to 768px
        tablet: { max: defaultTheme.screens.lg }, // Up to 1024px
        'mobile-to-desktop': {
          min: defaultTheme.screens.md, // From 768px
          max: defaultTheme.screens.lg, // To 1024px
        },
        desktop: { min: defaultTheme.screens.lg }, // From to 1024px
        'desktop-to-wide': {
          min: defaultTheme.screens.lg, // From 1024px
          max: defaultTheme.screens.xl, // Up to 1280px
        },
        'to-wide': { max: defaultTheme.screens.xl }, // Up to 1280px
        wide: { min: defaultTheme.screens.xl }, // From 1280px
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    // require('tailwindcss-safe-area'),
    require('tailwind-scrollbar-hide'),
    plugin(function ({ addVariant, e }) {
      // Radix Dropdown component open state
      addVariant('state-open', ['&[data-state="open"]'])
      addVariant('state-active', ['&[data-state="active"]'])
      addVariant('state-hactive', ['&[data-state="active"]'])

      // Prefers Contrast
      addVariant('contrast-safe', ['@media(prefers-contrast: no-preference)'])
      addVariant('contrast-less', ['@media(prefers-contrast: less)'])
      addVariant('contrast-more', ['@media(prefers-contrast: more)'])

      // Fallback for Firefox Backdrop filter support
      addVariant('-backdrop-blur', ['@supports not (backdrop-filter: blur())'])
      addVariant('backdrop-blur', ['@supports (backdrop-filter: blur())'])

      // Device can Hover
      // addVariant('hoverable', ['@media (hover: hover)'])

      // Hover only on devices that aren't touch screen.
      addVariant('hovers', ['@media(hover: hover) and (pointer: fine)'])

      // Target hover and active
      addVariant('hocus', ['&:hover', '&:focus'])
    }),
    // Backface visibility (performance)
    backfaceVisibility,

    InteractionMediaQueries,
    // require('tailwindcss-themer')({
    //   // Currently inactive, but ready for when I need it in the future
    //   // https://github.com/RyanClementsHax/tailwindcss-themer
    // }),
  ],
}
