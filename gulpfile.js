var gulp = require('gulp-help')(require('gulp'));
var gulpconnect = require('gulp-connect');

gulp.task('default', 'Hosts /src and watches for changes', ['connect','watch']);

gulp.task('connect', 'Hosts /src at localhost:1820', function () {
  gulpconnect.server({
    port: 1820,
    livereload: true,
    fallback: 'user_profile.html'
  });
});

gulp.task('reload', 'Reloads files from /src to host', function() {
  gulpconnect.reload();
});

gulp.task('watch', 'Watches for changes in /src', function() {
  gulp.watch('src/*', ['reload']);
});
