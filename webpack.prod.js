const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // new BundleAnalyzerPlugin()
  ]
  // ,
  // resolve: {
  //   alias: {
  //       "react": "preact-compat",
  //       "react-dom": "preact-compat",
  //       // Not necessary unless you consume a module using `createClass`
  //       "create-react-class": "preact-compat/lib/create-react-class",
  //       'react-dom-factories': 'preact-compat/lib/react-dom-factories'
  //     }
  // }
});