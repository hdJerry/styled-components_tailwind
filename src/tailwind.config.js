module.exports = {
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',//This helps you create your own custom class e.g bg-[#000]
  // Uncomment the purge object when you wanna build for production 
  // so as to remove tailwind classes that is not in use to reduce the styles.css file size for optimazation
  //  purge: {
  //    enabled: true,
  //    content: [
  //      './src/**/*.html',
  //      './src/**/*.jsx',
  //      './src/**/*.js',
  //      './src/**/*.css',
  //    ],
  //  },
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
