module.exports = {
  css: {
    loaderOptions: {
      sass: {},
    },
  },
  configureWebpack: {
    plugins: [],
  },
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.ts',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
    },
  },
}
