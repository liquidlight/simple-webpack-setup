'use strict';

gulp.task('default', function(e) {
	gulp.src('app.js')
		.pipe( gulp.dest('dist/js/') );
});
