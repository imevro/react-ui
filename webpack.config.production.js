const webpack = require('webpack');
const path    = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'index'),
  ],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js'
  },
  module: {
    noParse: ['node_modules/react'],
    loaders: [
      {
        test: /(.js|.jsx)/,
        exclude: /node_modules/,
        loaders: ['babel-loader?cacheDirectory=true']
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.css'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin('index.css', {
      allChunks: true,
    }),
  ],
  postcss: [
    require('postcss-import'),
    // require('postcss-use')({ modules: ['autoprefixer']}),
    require('postcss-sassy-mixins'),
    require('postcss-for'),
    require('postcss-conditionals'),
    require('postcss-simple-vars'),
    require('postcss-color-function'),
    require('postcss-mathjs'),
    require('postcss-nested'),
    require('autoprefixer')({ browsers: ['last 2 versions'] }),
  ],
}
