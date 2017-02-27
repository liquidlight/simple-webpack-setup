const path = require('path'), 
	  webpack = require('webpack'),
	  merge = require('webpack-merge'),
	  baseWebpackConfig = require('./webpack.base.js'),
	  FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new FriendlyErrorsPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			comments: false,
			compress: {
				warnings: false
			}
		})
	]
});