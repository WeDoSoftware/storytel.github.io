const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = (env, argv) => ({
  mode: argv.mode,
  devtool: argv.mode === 'development' ? 'cheap-module-eval-source-map' : 'source-map',
  entry: [
    path.join(__dirname, 'src', 'index.tsx')
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.jsx', '.js', '.json' ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: [ 'babel-loader', 'ts-loader' ]
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /(\.woff2?|\.eot|\.ttf|\.svg|\.gif|\.jpg|\.png)/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'head',
      title: 'Storytel Open Source',
      favicon: path.join(__dirname, 'assets', 'favicon.ico')
    }),
  ]
});

module.exports = config;
