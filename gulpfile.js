var gulp = require('gulp');
var stylus = require('gulp-stylus');
// var concat = require('gulp-concat');
var watch = require('gulp-watch');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');

gulp.task('stylus', function(){
	return gulp.src('./public/stylesheets/style.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('nodemon', function(){
	nodemon();
});

// gulp.task('lint', function() {
//   return gulp.src(['./public/javascripts/*.js','./routes/*.js'])
//     .pipe(jshint())
//     .pipe(jshint.reporter('You made a mistake'));
// });

// gulp.task('javascripts', function(){
// 	return gulp.src('./public/javascripts/*.js')
// 		.pipe(concat('all.js'))
// 		.pipe(gulp.dest('./'))
// });	

gulp.task('watch', function () {
    gulp.watch('./public/stylesheets/*.styl', ['stylus']); 
});

  gulp.task('default', ['nodemon', 'stylus', /*'lint', */ 'watch']);


