const webpack = require('webpack');
const path    = require('path');

const config = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src', 'app'),
  ],
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'app.js',
    publicPath: '/static/',
  },
  module: {
    noParse: ['node_modules/react'],
    loaders: [
      {
        test: /(.js|.jsx)/,
        exclude: /node_modules/,
        include: [__dirname, path.join(__dirname, '..', 'src')],
        loaders: ['babel-loader?cacheDirectory=true']
      },
      {
        test: /\.css/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
      },
    ],
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js', '.json', '.jsx', '.css', '.svg'],
    alias: {
      'react-ui': path.join('..', '..', 'src'),
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
  ],
  postcss: [
    require('postcss-import'),
    // require('postcss-use')({ modules: ['autoprefixer']}),
    require('postcss-sassy-mixins'),
    require('postcss-conditionals'),
    require('postcss-simple-vars'),
    require('postcss-mathjs'),
    require('postcss-nested'),
    require('autoprefixer')({ browsers: ['last 2 versions'] }),
  ],
  devtool: 'cheap-module-eval-source-map',
};

module.exports = config;
