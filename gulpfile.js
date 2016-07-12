var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var nodemon = require('gulp-nodemon');
// var jshint = require('gulp-jshint');
var Server = require('karma').Server;

gulp.task('test', function(done) {
	new Server({
		configFile:  __dirname + '/karma.conf.js',
    singleRun: true
	}, done).start();
})

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

gulp.task('javascripts', function(){
	return gulp.src('./public/javascripts/*.js')
		.pipe(concat('masterJS.js'))
		.pipe(gulp.dest('public/javascripts/master/'))
});

gulp.task('watch', function () {
    gulp.watch('./public/stylesheets/*.styl', ['stylus']);
    gulp.watch('./public/javascripts/*.js', ['javascripts']);
});

  gulp.task('default', ['nodemon', 'stylus', 'javascripts', /*'lint', */ 'watch']);
