var gulp = require('gulp');
    gutil = require('gulp-util');
    cssnano = require('gulp-cssnano');
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
    open = require('gulp-open');
    connect = require('gulp-connect');
    htmlmin = require('gulp-htmlmin');

gulp.task('css', function() {
  return gulp.src('assets/css/*.css')
    .pipe(cssnano())
    .on('error', gutil.log)
    .pipe(gulp.dest('build'))
    .pipe(connect.reload())
});

gulp.task('js', function() {
  gulp.src(['assets/sripts/*.js','index.js','models/*.js', 'routes/*.js'])
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('build'))
  .pipe(connect.reload())
});

gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch('assets/css/index.css', ['css']);
  gulp.watch('assets/sripts/*.js', ['js']);
  gulp.watch('routes/*.js', ['js'])
  gulp.watch('index.js', ['js']);
  gulp.watch('assets/css/*.css', ['css']);
  gulp.watch('index.html', ['html']);
});

gulp.task('connect', function() {
  connect.server({
    port: 3000,
    root: '.',
    livereload: true
  })
});

gulp.task('app', function(){
  gulp.src('index.js')
  .pipe(open({
    uri: 'http://localhost:3000'}));
});

gulp.task('default', ['html', 'js', 'css', 'connect', 'watch', 'app']);
