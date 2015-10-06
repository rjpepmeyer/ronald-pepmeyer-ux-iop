'use strict';

var gulp = require('gulp-help')(require('gulp'));
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');

gulp.task('default', 'Hosts /dist and watches for changes', ['connect', 'clean',
'copy', 'cacheTemplates', 'concatScripts', 'lint', 'sass', 'watch']);

gulp.task('cacheTemplates', function () {
  var TEMPLATE_HEADER = 'onboarding.run([\'$templateCache\', function($templateCache) {';
  return gulp.src('./src/partials/*.html')
    .pipe(templateCache())
    .pipe(gulp.dest('./temp'));
});

gulp.task('clean', 'Cleans dist/ and temp/', function() {
  return gulp.src(['./dist/*', './temp/*'], {read: false})
      .pipe(clean());
});

gulp.task('concatScripts', function() {
  return gulp.src(['./dist/*.js', './temp/*.js', './src/js/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('connect', 'Hosts /dist at localhost:1820', function () {
  connect.server({
    root: ['dist', __dirname],
    port: 1820,
    livereload: true
  });
});

gulp.task('copy', 'Copies index from src to dist', function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('lint', function() {
  return gulp.src('./js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('reload', 'Reloads files from /src to host', function() {
  connect.reload();
});

gulp.task('sass', 'Returns .css from .scss and .sass files', function() {
  gulp.src(['./src/sass/*.scss', './src/sass/*.sass'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/sass/'));
});

gulp.task('watch', 'Watches for changes in /src', function() {
  gulp.watch(['./partials/**', './sass/*.scss', './sass/*.sass', './js/**/*.js']
  ['reload']);
  gulp.watch(['./sass/*.scss', './sass/*.sass'] ['sass']);
  gulp.watch('./js/**/*.js',['lint']);
});
