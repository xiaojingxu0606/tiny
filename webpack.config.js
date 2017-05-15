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
  ],
  resolve: {
    alias: {
      'artTemplate': 'art-template/lib/template-web.js',
      'set-dom': 'set-dom/dist/set-dom.js',
    }
  }

};

if(ENV==="todolist") {
  config.entry = "./examples/todolist/index.js";
  config.output = {
    path: path.join(__dirname, 'examples/todolist'),
    filename: 'bundle.js',
    publicPath: '/examples/todolist/'
  };
  config.module.rules[0].include = [
    path.resolve(__dirname, "examples/todolist"),
    path.resolve(__dirname, "dist")
  ];
  config.module.rules.push({
    test: /\.html$/,
    use: ['html-loader']
  }, {
    test: /\.css$/,
    use: ['string-loader']
  }, {
    test: /\.styl$/,
    loader: 'string-loader!stylus-loader'
  });
}

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
