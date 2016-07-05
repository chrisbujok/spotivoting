const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  output: {
    path: `${__dirname}/dist`,
    publicPath: process.env.NODE_ENV === 'production' ? '' : '',
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['eslint'],
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.scss$/,
        loader: process.env.NODE_ENV === 'production'
          ? ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
          : 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.css%/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[\d\.]+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  devServer: {
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.entry = {
    bundle: './app/index',
    main: './styles/main',
    bootstrap: './styles/bootstrap/bootstrap',
    fontawesome: './styles/fontawesome',
  };

  config.output.filename = '[name].js';
  config.output.chunkFilename = '[id].js';

  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }));

  config.plugins.push(new ExtractTextPlugin('[name].css'));

  config.plugins.push(new HtmlWebpackPlugin({
    template: 'index.html',
    chunksSortMode: 'none',
  }));
} else {
  config.entry = [
    './app/index',
    './styles/bootstrap/bootstrap',
    './styles/fontawesome',
    './styles/main',
  ];

  config.plugins.push(new HtmlWebpackPlugin({
    template: 'index.html',
    inject: true,
  }));
}

module.exports = config;
