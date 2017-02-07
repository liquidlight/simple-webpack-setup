webpackConfig = {
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
				exclude: /(node_modules)/,
				loader: 'babel'
			}
		]
	},
	resolve: {
		modules: ["node_modules"]
	},
	plugins: [],
};

module.exports = webpackConfig;