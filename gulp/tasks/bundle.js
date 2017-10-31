/**
 * @file: bundle.js
 * @description: Generate a "bundle" file with "vendors" and "main" scripts.
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var gulpif = require('gulp-if');
var conf = require('../gulpconfig');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var sequence = require('run-sequence');

// @global: plugins sources
// @concat: convert sources into a single array (no sub array)
// @build: "bundle" scripts (vendors + main)
// @note: `run-sequence` don't accept "sub array".
// -----------------------

var src = [conf.workspace.jsVendor + '**/*.js', (conf.packageManager.managePlugins) ? conf.packageManager.src : [], conf.workspace.jsMain + '**/*.js'];
var arr = [];

for (var i = 0; i < src.length; i++) {
    arr = arr.concat(src[i]);
}

gulp.task('bundle', function() {
    return gulp.src(arr)
    .pipe(plumber())
	.pipe(gulpif(conf.jsOptions.minifyPlugins, sourcemaps.init()))
    .pipe(concat(conf.jsOptions.outputPluginsName + '.js'))
    .pipe(gulpif(conf.jsOptions.minifyPlugins, uglify({
        compress: true
    }))).on('error', function(err) {
        gutil.log('Error in: ' + gutil.colors.red(err.plugin));
        gutil.log('Message: ' + gutil.colors.red(err.cause.message));
        gutil.log('File: ' + gutil.colors.red(err.fileName));
        gutil.log('Line: ' + gutil.colors.red(err.cause.col));
    })
    .pipe(gulpif(conf.jsOptions.minifyPlugins, rename({
        suffix: '.min'
    })))
    .pipe(gulpif(conf.jsOptions.minifyPlugins, sourcemaps.write('./')))
    .pipe(gulp.dest(conf.distribution.js));
});

gulp.task('bundle:watch', ['bundle'], function() {
    return global.browserSync.reload();
});
