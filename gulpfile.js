'use strict';

var gulp = require("gulp"),
	gutil = require("gulp-util"),
	webpack2 = require('webpack'),
	webpackStream = require('webpack-stream'),
	config = require("./webpack.config.js");

/* Webpack Dev Config */
var devConfig = Object.create(config);
	devConfig.devtool = "sourcemap";
	devConfig.watch = true;

/* Webpack Production Config */
var productionConfig = Object.create(config);

console.log(devConfig);

/* Scripts compiler */
gulp.task('default', function(e) {
	return gulp.src('app.js')
		.pipe( gutil.env.dev ? webpackStream( devConfig, webpack2 ) : webpackStream( productionConfig, webpack2 ) )
		.pipe( gulp.dest('dist/js/') );
});