var gulp = require('gulp');
var gulpconnect = require('gulp-connect');

gulp.task('default', ['connect','watch']);

gulp.task('connect', function () {
  gulpconnect.server({
    port: 1820,
    livereload: true
  });
});

gulp.task('reload', function() {
  gulpconnect.reload();
});

gulp.task('watch', function() {
  gulp.watch('src/*', ['reload']);
});
