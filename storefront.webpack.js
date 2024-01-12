const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './js/APrices.js': path.resolve(__dirname, 'template/js/custom-js/js/APrices.js'),
      './html/APrices.html': path.resolve(__dirname, 'template/js/custom-js/html/APrices.html')
    }
  }
})