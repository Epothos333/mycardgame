var gulp = require('gulp');
var stylus = require('gulp-stylus');
// var concat = require('gulp-concat');
var watch = require('gulp-watch');
var nodemon = require('gulp-nodemon');

gulp.task('stylus', function(){
	return gulp.src('./public/stylesheets/style.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('nodemon', function(){
	nodemon();
});

// gulp.task('javascripts', function(){
// 	return gulp.src('./public/javascripts/*.js')
// 		.pipe(concat('all.js'))
// 		.pipe(gulp.dest('./'))
// });	

gulp.task('watch', function () {
    gulp.watch('./styles/*.styl', ['stylus']); 
});

  gulp.task('default', ['nodemon', 'stylus', 'watch']);


