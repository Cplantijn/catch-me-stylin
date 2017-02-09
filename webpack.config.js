var webpack = require('webpack');

module.exports = {
  entry: './src/client.js',
  output: {
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel-loader' },
      { test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ]
};
