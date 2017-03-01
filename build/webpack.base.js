const path = require('path'), 
	  webpack = require('webpack');

const baseWebpackConfig = {
	cache: true,
	entry: {
		test: "./src/js/test.js",
		app: "./src/js/app.js",
	},
	output: {
		filename: "[name].bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src/js'),
				exclude: [/node_modules/],
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
		modules: ["node_modules"],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		})
	]
};

module.exports = baseWebpackConfig;