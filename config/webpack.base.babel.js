import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export const PATHS = {
  app: path.join(__dirname, '..', 'app'),
  build: path.join(__dirname, '..', 'dist'),
};

export const baseHtmlPluginConfig = {
  template: path.join(__dirname + '/../app/index.hbs'),
  filename: 'index.html',
  inject: 'body',
};

export const baseConfig = {
  entry: [
    PATHS.app,
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  context: PATHS.app,
};

export const baseRules = [
  { test: /\.(js)$/, use: 'babel-loader' },
  { test: /\.hbs$/, use: 'handlebars-loader' },
];

const copyPlugin = new CopyWebpackPlugin([{
  from: 'images',
  to: 'images',
}]);

export const basePlugins = [
  copyPlugin,
];
