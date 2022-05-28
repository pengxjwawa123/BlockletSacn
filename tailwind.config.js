module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#e29478',
          secondary: '#e894b1',
          accent: '#08d874',
          neutral: '#211B27',
          'base-100': '#E8EEF2',
          info: '#65B8E2',
          success: '#28A46A',
          warning: '#997905',
          error: '#E74671',
        },
      },
    ],
  },
};
