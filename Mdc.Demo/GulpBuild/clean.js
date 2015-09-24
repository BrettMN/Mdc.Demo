var gulp = require('gulp');
var paths = require('./gulp.paths.js');
var del = require('del');
var vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean', function () {
    return gulp.src([paths.output])
      .pipe(vinylPaths(del));
});
