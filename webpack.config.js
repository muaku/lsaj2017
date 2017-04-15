const path = require('path');

const config = {
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000
  }
};

module.exports = config;