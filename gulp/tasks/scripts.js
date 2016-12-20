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

gulp.task('scripts', function() {
    gulp.src([conf.workspace.vendorJS + '**/*.js', conf.workspace.mainJS + '**/*.js'])
	.pipe(gulpif(conf.jsOptions.minifyJS, sourcemaps.init()))
    .pipe(concat(conf.jsOptions.outputName + '.js'))
    .pipe(gulpif(conf.jsOptions.minifyJS, uglifyJS2({
        compress: true
    }))).on('error', gutil.log)
    .pipe(plumber())
    .pipe(gulpif(conf.jsOptions.minifyJS, rename({
        suffix: '.min'
    })))
    .pipe(gulpif(conf.jsOptions.minifyJS, sourcemaps.write('./')))
    .pipe(plumber.stop())
    .pipe(gulp.dest(conf.distribution.js)).on('finish', function() {
        global.browserSync.reload();
    });
});
