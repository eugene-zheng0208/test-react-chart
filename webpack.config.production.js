var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var definePlugin = new webpack.DefinePlugin({
  'process.env': { NODE_ENV: JSON.stringify('production') }
})

var CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: 'css', to: 'css' },
  { from: 'images', to: 'images' },
  // { from: 'from/directory/**/*', to: '/absolute/path' },
], {
  ignore: [
      // '*.txt',
  ],
  // copyUnmodified: true
});

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body',
});

var UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: true
    }
});

var webpackConfig = {
	entry: __dirname + '/app/index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
        // loader: 'babel-loader',
				loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
			},
		],
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/build',
	},
  plugins: [
    HTMLWebpackPluginConfig,
    CopyWebpackPluginConfig,
    UglifyJsPluginConfig,
    definePlugin,
  ],
};

module.exports = webpackConfig;
