module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          350: '#FFE77A',
        },
        green: {
          350: '#83B290',
          650: '#9bAB9F',
          850: '#36443A',
          950: '#28332B',
        },
        purple: {
          350: '#856694',
        },
        card: {
          100: '#EDE7EB',
        }
      }
    },
  },
  plugins: [],
}
