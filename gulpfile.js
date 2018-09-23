var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {

	browserSync.init({
		server: './'	
	});

	gulp.watch('jasmine/spec/*feedreader.js').on('change', browserSync.reload);	
	gulp.watch('app.js').on('change', browserSync.reload);		

});

// http://localhost:3000
// http://localhost:3001    