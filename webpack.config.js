const path = require('path')
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
  filename: 'css/style-less.css'
});

const extractScss = new ExtractTextPlugin({
  filename: 'css/style-scss.css'
});

module.exports = {
    entry: [
      'react-hot-loader/patch',
      './src/index.js',
    ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['eslint-loader', 'eslint-loader']
          },
          // {
          //   test: /\.css$/,
          //   use: ExtractTextPlugin.extract(
          //     {
          //       fallback: 'style-loader',
          //       use: ['css-loader']
          //     })
          // },
          // {
          //   test: /\.scss$/,
          //   use: ExtractTextPlugin.extract(
          //     {
          //       fallback: 'style-loader',
          //       use: ['css-loader', 'sass-loader']
          //     })
          // },
          {
            test: /\.(less)$/,
            include: [
              /(node_modules|css)/,
            ],
            use: extractLess.extract({
              fallback: "style-loader",
              use: ['css-loader', 'less-loader']
            })            
          },
          {
            test: /\.(css|sass|scss)$/,
            include: [
              /(node_modules|css)/,
              path.resolve(__dirname, ""),
              path.resolve(__dirname, "node_modules")
            ],
            use: extractScss.extract({
              fallback: "style-loader",
              use: ['css-loader', 'sass-loader']
            })
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        }           
        ]
      },
      resolve: {
        modules: [
          'node_modules',
          '..'
        ],
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      extractLess,
      extractScss
    ],
    devServer: {
      port: 3000,
      contentBase: './dist', 
      hot: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      }
    }
  };