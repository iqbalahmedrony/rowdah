var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path'); 
 
gulp.task('less', function(){
  return gulp.src('./client/css/less.less')
    .pipe(less()) // Using gulp-less
    .pipe(gulp.dest('./views/css'))
});

// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['less']);