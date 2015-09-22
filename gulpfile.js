'use strict';

var gulp    = require('gulp-help')(require('gulp'));
var connect = require('gulp-connect');
var sass    = require('gulp-sass');
var jshint  = require('gulp-jshint');

gulp.task('default', 'Hosts /src and watches for changes', ['connect','watch','lint']);

gulp.task('connect', 'Hosts /src at localhost:1820', function () {
  connect.server({
    port: 1820,
    livereload: true,
    fallback: 'user_profile.html'
  });
});

gulp.task('lint', function() {
  return gulp.src('./scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
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
  gulp.watch('./scripts/*.js',['lint']);
});
