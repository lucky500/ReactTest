const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
  path: __dirname + '/public',
  filename: './app.js',
  publicPath: '/'
 },
 devServer: {
  port: 8080,
  contentBase: './public',
  historyApiFallback: true,
 },
 resolve: {
  extensions: ['.js', '.jsx'],
  alias: {
    modules: __dirname + '/node_modules',
    jquery: 'modules/jquery/dist/jquery.min.js',
    bootstrap: 'modules/bootstrap/dist/js/bootstrap.js'
  }
 },
 plugins: [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  }),
  new ExtractTextPlugin('app.css')
 ],
 module: {
  rules: [
    {
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
        // use: ['css-loader', 'sass-loader'],
        // fallback: 'style-loader'
        fallback: 'style-loader',
        use: ['css-loader']
      })
    },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
        use: ['file-loader']
      }
    ]
  }
}