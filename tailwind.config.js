/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'Arial', 'sans-serif'],
      },
      colors: {
        page:     '#111113',
        surface:  '#18181b',
        surface2: '#1e1e22',
        divider:  '#2a2a30',
        muted:    '#6b6b7a',
        subtle:   '#9898a8',
        body:     '#f0f0f2',
        accent:   '#3a3a45',
        dim:      '#4a4a58',
        light:    '#f7f7f8',
        'light-border': '#e8e8ec',
      },
      screens: {
        mobile: { max: '900px' },
        xs:     { max: '540px' },
      },
      maxWidth: {
        container:    '1200px',
        'container-lg': '1400px',
      },
    },
  },
  plugins: [],
}
