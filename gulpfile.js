'use strict';

var gulp = require("gulp"),
	gutil = require("gulp-util"),
	webpack = require('webpack'),
	webpackStream = require('webpack-stream'),
	webpackConfig = require("./webpack.config.js");

/* Webpack Dev Config */
var devConfig = Object.create(webpackConfig);
	devConfig.devtool = "sourcemap";
	devConfig.debug = true;
	devConfig.watch = true;

/* Webpack Production Config */
var productionConfig = Object.create(webpackConfig);

/* Scripts compiler */
gulp.task('default', function(e) {
	return gulp.src('app.js')
		.pipe( gutil.env.dev ? webpackStream( devConfig ) : webpackStream( productionConfig ) )
		.pipe( gulp.dest('dist/js/') );
});