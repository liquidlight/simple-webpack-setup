'use strict';

var gulp = require("gulp"),
	webpack = require('webpack'),
	webpackStream = require('webpack-stream'),
	config = require("./webpack.config.js");

gulp.task('default', function(e) {
	return gulp.src('app.js')
		.pipe( webpackStream(config, webpack) )
		.pipe( gulp.dest('dist/js/') );
});