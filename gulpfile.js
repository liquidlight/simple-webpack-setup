/**
 *
 * Consider replace gutil with chalk (https://www.npmjs.com/package/chalk)
 *
 */


'use strict';

var gulp          = require("gulp"),
	gutil         = require("gulp-util"),
	webpack       = require('webpack'),
	webpackStream = require('webpack-stream'),
	gutil         = require('gulp-util');

process.env.production = false;
if( gutil.env.production ) {
	var config = require("./build/webpack.prod.js");
	process.env.production = true;
	gutil.log( gutil.colors.yellow('\n\nBuilding for production... \n'));
} else {
	var config = require("./build/webpack.dev.js");
}

/* Scripts compiler */
gulp.task('default', function(e) {
	return gulp.src('app.js')
		.pipe( webpackStream(config, webpack) )
		.pipe( gulp.dest('dist/js/') );
});