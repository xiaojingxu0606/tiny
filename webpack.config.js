var webpack = require('webpack');
// css extensions for stylus
var nib = require('nib');
var path = require('path');
var packageJSON = require('./package.json');

const ENV  = process.env.NODE_ENV;
console.log('Build environment is ' + ENV);
var config = {
  entry: {
    tiny: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'Tiny',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [
          path.resolve(__dirname, "src")
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(packageJSON.name
      + " v"+ packageJSON.version
      + "\r\nauthor "+ packageJSON.author)
  ]

};

if(ENV==="build-min") {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
  config.entry = {
    'tiny.mini': './src/index.js'
  }
}

module.exports = config;
