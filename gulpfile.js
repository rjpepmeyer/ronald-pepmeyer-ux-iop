'use strict';

var gulp    = require('gulp-help')(require('gulp'));
var connect = require('gulp-connect');
var sass    = require('gulp-sass');

gulp.task('default', 'Hosts /src and watches for changes', ['connect','watch']);

gulp.task('connect', 'Hosts /src at localhost:1820', function () {
  connect.server({
    port: 1820,
    livereload: true,
    fallback: 'user_profile.html'
  });
});

gulp.task('reload', 'Reloads files from /src to host', function() {
  connect.reload();
});

gulp.task('sass', 'Returns .css from .scss and .sass files', function() {
  gulp.src(['./styles/*.scss', './styles/*.sass'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles'));
});

gulp.task('watch', 'Watches for changes in /src', function() {
  gulp.watch('src/*', ['reload']);
  gulp.watch(['./styles/*.scss', './styles/*.sass'], ['sass']);
});
