'use strict';

var gulp = require("gulp"),
	gutil = require("gulp-util"),
	webpack = require('webpack'),
	webpackStream = require('webpack-stream'),
	config = require("./webpack.config.babel.js"),
	gutil = require('gulp-util');

/* Webpack Dev Config */
var devConfig = Object.create(config);
	devConfig.devtool = "sourcemap";
	devConfig.watch = true;

/* Webpack Production Config */
var productionConfig = Object.create(config);
productionConfig.plugins = [
 	new webpack.optimize.UglifyJsPlugin({
		sourceMap: false,
		comments: false,
		compress: {
			warnings: false
		}
	})
];

process.env.production = false;
if( gutil.env.production ) {
	process.env.production = true;
	gutil.log( gutil.colors.yellow('\n\nBundling for production... \n'));
}

/* Scripts compiler */
gulp.task('default', function(e) {
	return gulp.src('app.js')
		.pipe( gutil.env.production ? webpackStream( productionConfig, webpack ) : webpackStream( devConfig, webpack ) )
		.pipe( gulp.dest('dist/js/') );
});