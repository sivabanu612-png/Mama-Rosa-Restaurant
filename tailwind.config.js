export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Only three colours: black, white and red
      colors: {
        sign: '#E31B23',     // main red
        door: '#B3121A',     // darker red for hover
        night: '#0A0A0A',    // black
        charcoal: '#1A1A1A', // slightly lighter black for cards
        paper: '#F5F5F5',    // soft white for section backgrounds
        tan: '#FFFFFF',      // white accents
      },
      fontFamily: {
        script: ['"Lobster Two"', 'cursive'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1280px' },
    },
  },
  plugins: [],
}