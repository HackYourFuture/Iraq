module.exports = {
  cache: false,
  build: {
    publicPath: 'https://hackyourfuture.github.io/Iraq/'
  },
  generated: {
    ssr: false
  },
  plugins: [
    { src: '~components/SVGTriangles.vue', ssr: false }
  ]
}
