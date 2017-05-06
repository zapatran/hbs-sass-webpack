import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { baseConfig, baseHtmlPluginConfig, basePlugins,
  baseRules } from './webpack.base.babel';

const HtmlMinifierConfig = {
  conservativeCollapse: true,
  collapseWhitespace: true,
  removeComments: true,
  removeEmptyAttributes: true,
};
const htmlPlugin = new HtmlWebpackPlugin({
  ...baseHtmlPluginConfig,
});
const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});
const extractCssPlugin = new ExtractTextPlugin({filename: 'index.css'});
const prodPlugins = [htmlPlugin, productionPlugin, extractCssPlugin];

const prodRules = { test: /\.scss$/, use: ExtractTextPlugin.extract({
  use: [ 'css-loader', 'sass-loader' ],
})};

export default {
  ...baseConfig,
  module: {
    rules: baseRules.concat(prodRules),
  },
  plugins: basePlugins.concat(prodPlugins),
};
