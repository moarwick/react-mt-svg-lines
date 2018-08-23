const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const isProd = process.argv.includes('production');
const isDev = !isProd;
const ENV = isProd ? 'production' : 'development';
const DEV_PORT = '8080';

const srcFolder = path.resolve(__dirname, 'src/demos');
const outFolder = path.resolve(__dirname, 'public');

module.exports = function() {
  console.log(`Building for ${ENV}...`);

  /* ----- PLUGINS ----- */

  const plugins = [
    new HtmlWebpackPlugin({
      template: 'src/demos/index.html',
      hash: true,
      inject: 'body',
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
    }),
    new webpack.NamedModulesPlugin(),
    new ProgressBarPlugin(),
    new ExtractTextPlugin('bundle.css'),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  if (isProd) {
    plugins.unshift(new CleanWebpackPlugin(['public'])); // clear demo folder first!
  }

  /* ----- ENTRY ----- */

  const entry = ['babel-polyfill'];

  if (isDev) {
    entry.push('react-hot-loader/patch');
    entry.push(`webpack-dev-server/client?http://localhost:${DEV_PORT}`);
    entry.push('webpack/hot/dev-server'); // or 'webpack/hot/only-dev-server' to reload on success only
  }

  entry.push(path.join(srcFolder, 'index.js'));

  /* ----- FINAL CONFIG ----- */

  return {
    devtool: isDev ? 'eval-source-map' : 'source-map',
    mode: isDev ? 'development' : 'production',
    entry,
    output: {
      filename: 'bundle.js',
      path: outFolder,
      pathinfo: isDev,
      publicPath: '',
    },
    resolve: {
      modules: [path.resolve('./src'), 'node_modules'],
      extensions: ['.js', '.jsx'],
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          // include: srcFolder,
        },
        {
          test: /\.(png|jpg|jpeg)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'url-loader',
              options: { limit: 8192, name: './img/[hash].[ext]' }, // inline if under 8k
            },
          ],
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader', 'postcss-loader']),
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'url-loader',
              options: { limit: 2048, name: './fonts/[hash].[ext]' }, // inline if under 2k
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [{ loader: 'babel!svg-react' }],
        },
      ],
    },
    devServer: {
      contentBase: outFolder,
      historyApiFallback: true,
      hot: true,
      hotOnly: true,
      stats: 'minimal',
    },
  };
};
