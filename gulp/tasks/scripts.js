/**
 * @scripts js task
 * @return: {scripts}
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var gulpif = require('gulp-if');
var conf = require('../gulpconfig');
var file = require('gulp-file');
var modernizr = require('modernizr');
var modernizrProp = require('modernizr/lib/config-all.json');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var sequence = require('run-sequence');

// @build: global jquery lib
// -----------------------

gulp.task('jquery', function() {
    return gulp.src(conf.jsOptions.jQuery)
    .pipe(plumber())
    .pipe(gulpif(conf.jsOptions.minifyjQuery, uglify({
        compress: true
    }))).on('error', gutil.log)
    .pipe(gulpif(conf.jsOptions.minifyjQuery, rename({
        suffix: '.min'
    })))
    .pipe(gulp.dest(conf.distribution.lib));
});

// @build: modernizr lib
// -----------------------

var prefix = (conf.jsOptions.modernizrCustomOptions) ? '.custom.js' : '.js';
var prop = (conf.jsOptions.modernizrCustomOptions) ? conf.jsOptions.customizr : modernizrProp;

gulp.task('modernizr', function() {
    return modernizr.build(prop, function(result) {
        file('modernizr' + prefix, result, {
            src: false
        })
        .pipe(plumber())
        .pipe(gulpif(conf.jsOptions.minifyModernizr, uglify({
            compress: true
        }))).on('error', gutil.log)
        .pipe(gulpif(conf.jsOptions.minifyModernizr, rename({
            suffix: '.min'
        })))
        .pipe(gulp.dest(conf.distribution.lib));
    });
});

// @global: plugins sources
// @concat: convert sources into a single array (no sub array)
// @build: "bundle" scripts (vendors + main)
// @note: `run-sequence` don't accept a "sub array".
// -----------------------

var src = [conf.workspace.vendor + '**/*.js', (conf.packageManager.managePlugins) ? conf.packageManager.src : [], conf.workspace.main + '**/*.js'];
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
    }))).on('error', gutil.log)
    .pipe(gulpif(conf.jsOptions.minifyPlugins, rename({
        suffix: '.min'
    })))
    .pipe(gulpif(conf.jsOptions.minifyPlugins, sourcemaps.write('./')))
    .pipe(gulp.dest(conf.distribution.js));
});

gulp.task('bundle:watch', ['bundle'], function() {
    return global.browserSync.reload();
});

// @build: all libraries
// -----------------------

gulp.task('libs', function(done) {
    sequence('jquery', 'modernizr', done);
});
