const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
// const WorkboxPlugin = require('workbox-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { ReactLoadablePlugin } = require("react-loadable/webpack");

const devMode = false // process.env.NODE_ENV !== 'production'
console.log('devMode ', devMode)

module.exports = {
  entry: {
    index: './src/index.js',
    app: './src/App.js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          minChunks: 3
        }
      }
    },
    minimizer: devMode ? [] : [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps,
        //only uncomment on final build as only decreases size by 1% to 2% and lose all error handling
        // uglifyOptions: {
        //   mangle: true,
        //   compress: {
        //     warnings: false, // Suppress uglification warnings
        //     pure_getters: true,
        //     unsafe: true,
        //     unsafe_comps: true,
        //     screw_ie8: true,
        //     conditionals: true,
        //     unused: true,
        //     comparisons: true,
        //     sequences: true,
        //     dead_code: true,
        //     evaluate: true,
        //     if_return: true,
        //     join_vars: true
        //   },
        //   output: {
        //     comments: false,
        //   },
        //   exclude: [/\.min\.js$/gi] // skip pre-minified libs
        // }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      // inject: false
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.HashedModuleIdsPlugin(),
    // new WorkboxPlugin.GenerateSW({
    //   // these options encourage the ServiceWorkers to get in there fast 
    //   // and not allow any straggling "old" SWs to hang around
    //   clientsClaim: true,
    //   skipWaiting: true
    // }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new ReactLoadablePlugin({
        filename: path.resolve(__dirname, 'react-loadable.json'),
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: [/\.scss$/],
        include: path.resolve(__dirname, './src'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            }
          },
        ]
      },
      {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
              'file-loader'
          ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }  
};