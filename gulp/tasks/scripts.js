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

// @build: global base lib
// -----------------------

gulp.task('base-libs', function() {
    return gulp.src(conf.jsOptions.libs)
    .pipe(plumber())
    .pipe(gulpif(conf.jsOptions.minifyLibs, uglify({
        compress: true
    }))).on('error', gutil.log)
    .pipe(gulpif(conf.jsOptions.minifyLibs, rename({
        suffix: '.min'
    })))
    .pipe(gulp.dest(conf.distribution.jsLib));
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
        .pipe(gulp.dest(conf.distribution.jsLib));
    });
});

// @global: plugins sources
// @concat: convert sources into a single array (no sub array)
// @build: "bundle" scripts (vendors + main)
// @note: `run-sequence` don't accept a "sub array".
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

// @push `modernizr`
// @param: {bool}
// -------------------

var libs = ['base-libs'];

if (conf.jsOptions.modernizr) {
    libs.push('modernizr');
}

// @build: all libraries
// -------------------

gulp.task('libs', function(done) {
    sequence.apply(null, libs, done);
});
