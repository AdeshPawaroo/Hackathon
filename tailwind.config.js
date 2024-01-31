/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'jada-purple': '#9B5DE5',
        'jada-pink': '#FF5BB5',
        'jada-yellow': '#FEE440',
        'jada-blue': '#00BBF9',
        'jada-cyan': '#00F5D4',
      },
    },
  },
  plugins: [],
}
