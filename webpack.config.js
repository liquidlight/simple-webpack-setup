const webpack = require('webpack');
const path = require('path');

const config = {
	cache: true,
	entry: {
		app: "./assets/js/app.js"
	},
	output: {
		filename: "[name].bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'assets/js'),
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}]
			}
		]
	},
	resolve: {
		modules: ["node_modules"]
	},
	plugins: [],
};

module.exports = config;