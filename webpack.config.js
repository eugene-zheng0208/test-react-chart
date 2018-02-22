var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var definePlugin = new webpack.DefinePlugin({
  'process.env': { NODE_ENV: JSON.stringify('development') }
})

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body',
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
    definePlugin,
  ],
};

module.exports = webpackConfig;
