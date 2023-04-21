const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const fileName = (ext) => (isProd ? `bundle.[fullhash].${ext}` : `bundle.${ext}`);

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    filename: './index.js',
  },
  output: {
    filename: fileName('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'components/*': ['./src/components/*'],
      'modules/*': ['./src/modules/*'],
      'context/*': ['./src/context/*'],
      'hooks/*': ['./src/hooks/*'],
      'utils/*': ['./src/utils/*'],
      'requests/*': ['./src/requests/*'],
      '@/*': ['./*'],
    },
  },
  devtool: isProd ? false : 'source-map',
  devServer: {
    port: 3000,
    hot: !isProd,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin(),
    new HTMLWebpackPlugin({
      template: './pages/index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist') },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: fileName('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
