var gutil = require('gulp-util');

module.exports = function(){
	switch(process.env.NODE_ENV) {
		case 'development':
			return require("./webpack.dev.js");;

		case 'production':
			return require("./webpack.prod.js");

		default:
			gutil.log(gutil.colors.yellow('\n\nNODE_ENV not defined.\n'),
				      gutil.colors.cyan('Building for production... \n'));
			return require("./webpack.prod.js");
	}
};