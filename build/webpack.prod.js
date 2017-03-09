var path = require('path'), 
	webpack = require('webpack'),
	merge = require('webpack-merge'),
	baseWebpackConfig = require('./webpack.base.js'),
	FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
	watch: true,
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new FriendlyErrorsPlugin(),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		// new webpack.optimize.UglifyJsPlugin()
	]
});