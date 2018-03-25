
var gulp=require('gulp');
var	sass=require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./app/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});


gulp.task('sass:watch', function() {
	gulp.watch('./app/app.scss', ['sass']);
});


gulp.task("copy_img", function() {
	gulp.src('./app/img/*.*')
	.pipe(gulp.dest('./public/img/'))

});

gulp.task('copy-js', function(){
	gulp.src('./app/js/*.js')
	.pipe(gulp.dest('./public/js'));
})

gulp.task('js:watch', function(){
	gulp.watch('./app/js/main.js', ['copy-js']);
});


gulp.task("default", ['sass', 'sass:watch', 'copy_img','copy-js', 'js:watch']);