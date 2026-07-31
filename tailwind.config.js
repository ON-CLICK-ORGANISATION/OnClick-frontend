/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        border: 'var(--color-border)',
        card: 'var(--color-card)',
        mist: 'var(--color-mist)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        magenta: 'var(--color-magenta)',
        lemon: 'var(--color-lemon)',
        butter: {
          DEFAULT: 'var(--color-butter)',
          foreground: 'var(--color-butter-foreground)',
        },
        'slate-orb': {
          DEFAULT: 'var(--color-slate-orb)',
          foreground: 'var(--color-slate-orb-foreground)',
        },
        'muted-foreground': 'var(--color-muted-foreground)',
      },
      fontFamily: {
        display: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '2xl': '42rem',
        '3xl': '48rem',
      },
    },
  },
  plugins: [],
}
