/**
 * @app-js task
 * @return: [vendor, main]
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglifyJS2 = require('gulp-uglify');
var gulpUtil = require('gulp-util');
var rename = require('gulp-rename');

gulp.task('app', function() {
    gulp.src([conf.workspace.vendorJS + '**/*.js', conf.workspace.mainJS + '**/*.js'])
	.pipe(sourcemaps.init())
    .pipe(concat(conf.jsOptions.outputName + '.js'))
    .pipe(uglifyJS2({
        compress: conf.jsOptions.compress
    })).on('error', gulpUtil.log)
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(conf.distribution.js));
});

gulp.task('app:watch', ['app'], function() {
	gulp.watch(conf.distribution.js + '**/*.js').on('change', function() {
        global.browserSync.reload();
    });
});
