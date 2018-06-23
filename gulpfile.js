const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('default', () => {
	return gulp.src([
		'_locales/**',
		'images/**',
		'background.js',
		'manifest.json'
	], {
		base: '.'
	})
	.pipe(zip('contenteditable.zip'))
	.pipe(gulp.dest('.'))
	.pipe(zip('contenteditable.nex'))
	.pipe(gulp.dest('.'));
});
