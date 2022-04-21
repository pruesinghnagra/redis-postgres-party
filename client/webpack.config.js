const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
  entry: ['./client/index.js', './client/styles/index.css'],
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.min.css',
    }),
  ],
  output: {
    path: path.join(__dirname, '..', 'server', 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                    'precss',
                    'autoprefixer',
                    'tailwindcss'
                  ]
                }
              }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}
