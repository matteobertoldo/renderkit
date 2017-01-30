/**
 * @scripts js task
 * @return: {scripts}
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var gulpif = require('gulp-if');
var conf = require('../gulpconfig');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglifyJS2 = require('gulp-uglify');
var gutil = require('gulp-util');
var rename = require('gulp-rename');

// @global scripts sources
// -----------------------

var src = [conf.workspace.vendor + '**/*.js', (conf.packageManager.manage) ? conf.packageManager.src : [], conf.workspace.main + '**/*.js'];
var arr = [];

// @convert sources into a single array (no sub array)
// @note: `run-sequence` don't accept a "sub array".
// -----------------------

for (var i = 0; i < src.length; i++) {
    arr = arr.concat(src[i]);
}

gulp.task('scripts', function() {
    return gulp.src(arr)
    .pipe(plumber())
	.pipe(gulpif(conf.jsOptions.minify, sourcemaps.init()))
    .pipe(concat(conf.jsOptions.outputName + '.js'))
    .pipe(gulpif(conf.jsOptions.minify, uglifyJS2({
        compress: true
    }))).on('error', gutil.log)
    .pipe(gulpif(conf.jsOptions.minify, rename({
        suffix: '.min'
    })))
    .pipe(gulpif(conf.jsOptions.minify, sourcemaps.write('./')))
    .pipe(gulp.dest(conf.distribution.js));
});

gulp.task('scripts:watch', ['scripts'], function() {
    return global.browserSync.reload();
});
