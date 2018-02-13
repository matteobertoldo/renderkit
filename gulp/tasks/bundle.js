/**
 * @file bundle.js
 * @description Generate a "bundle" file with "vendors" and "main" scripts.
 * @author mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var gulpif = require('gulp-if');
var conf = require('../gulpconfig');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var log = require('fancy-log');
var colors = require('ansi-colors');
var errors = require('../utils/errors');
var rename = require('gulp-rename');
var sequence = require('run-sequence');

/**
* @var src [Array]
* @return Array
*/

var src = [];

if (conf.jsOptions.browserify) {
    src = [conf.workspace.js.main + '**/*.js'];
} else {
    src = [conf.workspace.js.vendor + '**/*.js', (conf.packageManager.managePlugins) ? conf.packageManager.src : [], conf.workspace.js.main + '**/*.js'];
}

/**
* @var arr [Array]
* @description: Convert @var arr into a single array. `run-sequence` don't accept "sub array".
*/

var arr = [];

for (var i = 0; i < src.length; i++) {
    arr = arr.concat(src[i]);
}

if (conf.jsOptions.browserify) {
    var srcPlugins = (conf.packageManager.managePlugins) ? conf.packageManager.src : conf.workspace.js.vendor + '**/*.js';

    gulp.task('plugins', function() {
        return gulp.src(srcPlugins)
        .pipe(plumber())
        .pipe(concat(conf.jsOptions.outputPluginsName + '.js'))
        .pipe(gulpif(conf.jsOptions.minifyPlugins, uglify({
            compress: true
        }))).on('error', function(err) {
            return errors(err);
        })
        .pipe(gulpif(conf.jsOptions.minifyPlugins, rename({
            suffix: '.min'
        })))
        .pipe(gulp.dest(conf.distribution.js.base));
    });

    gulp.task('bundle', function() {
        var bundle = browserify({
            entries: conf.jsOptions.browserifyBaseFile,
            debug: true
        });

        return bundle.bundle().on('error', function(err) {
            log(colors.red(err));
            this.emit('end');
        })
        .pipe(source(conf.jsOptions.outputBundleName + '.js'))
        .pipe(buffer())
        .pipe(gulpif(conf.jsOptions.minifyBundle, sourcemaps.init()))
        .pipe(gulpif(conf.jsOptions.minifyBundle, uglify({
            compress: true
        })))
        .pipe(gulpif(conf.jsOptions.minifyBundle, rename({
            suffix: '.min'
        })))
        .pipe(gulpif(conf.jsOptions.minifyBundle, sourcemaps.write('./')))
        .pipe(gulp.dest(conf.distribution.js.base));
    });

} else {
    gulp.task('bundle', function() {
        return gulp.src(arr)
        .pipe(plumber())
    	.pipe(gulpif(conf.jsOptions.minifyBundle, sourcemaps.init()))
        .pipe(concat(conf.jsOptions.outputBundleName + '.js'))
        .pipe(gulpif(conf.jsOptions.minifyBundle, uglify({
            compress: true
        }))).on('error', function(err) {
            return errors(err);
        })
        .pipe(gulpif(conf.jsOptions.minifyBundle, rename({
            suffix: '.min'
        })))
        .pipe(gulpif(conf.jsOptions.minifyBundle, sourcemaps.write('./')))
        .pipe(gulp.dest(conf.distribution.js.base));
    });
}

gulp.task('bundle:watch', ['bundle'], function() {
    return global.browserSync.reload();
});
