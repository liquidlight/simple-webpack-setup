var webpack = require('webpack'),
	path = require('path');

var srcPath  = path.join(__dirname, '/src/js'),
	distPath = path.join(__dirname, '/dist/js');

module.exports = {
	watch: true,
	cache: true,
	devtool: '#cheap-module-eval-source-map',
	context: srcPath,
	entry: {
		app: './app.js',
	},
	output: {
		path: distPath,
		filename: '[name].bundle.js',
	},
	resolve: {
		modules: ["node_modules"],
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin()
	]
};