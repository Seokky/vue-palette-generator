module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-palette-generator/'
    : '/',
  outputDir: 'docs',
  productionSourceMap: false
}