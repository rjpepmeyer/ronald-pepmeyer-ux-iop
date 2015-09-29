'use strict';

var gulp    = require('gulp-help')(require('gulp'));
var connect = require('gulp-connect');
var sass    = require('gulp-sass');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('default', 'Hosts /src and watches for changes', ['connect','watch','lint','sass']);

gulp.task('connect', 'Hosts /src at localhost:1820', function () {
  connect.server({
    port: 1820,
    livereload: true,
    fallback: '/src/#/index.html'
  });
});

gulp.task('lint', function() {
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('reload', 'Reloads files from /src to host', function() {
  connect.reload();
});

gulp.task('sass', 'Returns .css from .scss and .sass files', function() {
  gulp.src(['./src/sass/*.scss', './src/sass/*.sass'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/sass/'));
});

gulp.task('watch', 'Watches for changes in /src', function() {
  gulp.watch(['./partials/*', './sass/*', './js/*'] ['reload']);
  gulp.watch(['./sass/*.scss', './sass/*.sass'], ['sass']);
  gulp.watch('./js/*.js',['lint']);
});
