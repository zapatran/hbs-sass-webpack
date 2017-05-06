import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import { PATHS, baseConfig, baseHtmlPluginConfig,
  baseRules, basePlugins } from './webpack.base.babel';

const devConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    inline: true,
  },
};

const htmlPlugin = new HtmlWebpackPlugin(baseHtmlPluginConfig);
const hmrePlugin = new webpack.HotModuleReplacementPlugin();
const copyPlugin = new CopyWebpackPlugin([{
  from: 'images',
  to: 'images',
}]);

const devRules = { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]};
const devPlugins = [ htmlPlugin, hmrePlugin ];

export default {
  ...baseConfig,
  ...devConfig,
  module: {
    rules: baseRules.concat(devRules),
  },
  plugins: basePlugins.concat(devPlugins),
};
