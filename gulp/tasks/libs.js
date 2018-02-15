/**
 * @file libs.js
 * @description Task to compile libraries like Modernizr or compress libraries used.
 * @author mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var gulpif = require('gulp-if');
var conf = require('../gulpconfig');
var file = require('gulp-file');
var modernizr = require('modernizr');
var modernizrProp = require('modernizr/lib/config-all.json');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var errors = require('../utils/errors');
var rename = require('gulp-rename');
var sequence = require('run-sequence');

// @build: global base lib
// -----------------------

gulp.task('base-libs', function() {
    return gulp.src(conf.jsOptions.libs)
    .pipe(plumber())
    .pipe(gulpif(conf.jsOptions.minifyLibs, uglify({
        compress: true
    }))).on('error', function(err) {
        return errors(err);
    })
    .pipe(gulpif(conf.jsOptions.minifyLibs, rename({
        suffix: '.min'
    })))
    .pipe(gulp.dest(conf.distribution.js.lib));
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
        }))).on('error', function(err) {
            return errors(err);
        })
        .pipe(gulpif(conf.jsOptions.minifyModernizr, rename({
            suffix: '.min'
        })))
        .pipe(gulp.dest(conf.distribution.js.lib));
    });
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
