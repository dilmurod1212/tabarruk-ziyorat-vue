/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['"Open Sans"'],
      playfair: ['"Playfair Display"'],
      montserrat: ['"Montserrat"']
    },
    extend: {
      backgroundImage: () => ({
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('/images/Image.png')",
      }),
      backgroundColor: () => ({
        'btn-red': '#E54545',
        'btn-red-hover': '#C72727',
        'btn-dark': '#2C2E3E',
        'btn-dark-hover': '#181A2A'
      }),
      ringColor: () => ({
        'btn-dark': '#2C2E3E',
        'btn-red': '#E54545',
      }),

    }
  },
  plugins: []
}
