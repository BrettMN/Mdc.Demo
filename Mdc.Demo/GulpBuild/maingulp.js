var compilerOptions = {
    modules: 'system',
    moduleIds: false,
    comments: false,
    compact: false,
    stage: 2,
    optional: [
      "es7.decorators",
      "es7.classProperties"
    ]
};

var gulp = require('gulp'),
    paths = require('./gulp.paths.js'),
    runSequence = require('run-sequence'),
    livereload = require('gulp-livereload'),
    changed = require('gulp-changed'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    assign = Object.assign || require('object.assign'),
    babel = require('gulp-babel'),
    notify = require("gulp-notify");


gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('change', ['build'], function () {
    return livereload.reload();
});

gulp.task('build-html', function (callback) {
    return gulp.src(paths.html)
      .pipe(changed(paths.output, { extension: '.html' }))
      .pipe(gulp.dest(paths.output));
});

gulp.task('build-js', function () {
    return gulp.src(paths.source)
      .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
      .pipe(changed(paths.output, { extension: '.js' }))
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(babel(assign({}, compilerOptions, { modules: 'system' })))
      .pipe(sourcemaps.write({ includeContent: true }))
      .pipe(gulp.dest(paths.output));
});

gulp.task('build', function (callback) {
    return runSequence(
      'clean',
      ['build-js', 'build-html'],
      callback
    );
});


gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(paths.allSource, ['change']);
});
