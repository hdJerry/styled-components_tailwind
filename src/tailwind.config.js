module.exports = {
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',//This helps you create your own custom class e.g bg-[#000]
   purge: {
     enabled: true,
     content: [
       './src/**/*.html',
       './src/**/*.jsx',
       './src/**/*.js',
       './src/**/*.css',
     ],
   },
  theme: {
    extend: {
      screens: {
        'mobile': '320px'//Add other screens as it applies to you
      },
      colors: {
        'brand-color': '#6d366c'//Add other colors as it applies to you
      },
      fill: {
        'brand-color': '#6d366c'//Add other colors as it applies to you
      },
      width: () => ({
        '4/10': '40vw'//You can also add and replace the width
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
