'use strict'

module.exports = {
  context: __dirname + "/js/dev",
    entry: "./main.js",
      output: {
          path: __dirname + "/js/public",
          filename: "[name].js",
          library: "[name]"
      },


  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'

      },
    ]
  }
};