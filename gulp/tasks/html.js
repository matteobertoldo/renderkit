/**
 * @gulp html task
 * @include: gulp-html-tag-include
 * @note: no subfolders detect for don't go in distribution with html partials.
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
var plumber = require('gulp-plumber');
var include = require('gulp-html-tag-include');
var htmlbeautify = require('gulp-html-beautify');
var gulpUtil = require('gulp-util');

gulp.task('html', function() {
    gulp.src(conf.workspace.html + '*.html')
    .pipe(include({
        prefixVar: '@'
    })).on('error', gulpUtil.log)
    .pipe(plumber())
    .pipe(htmlbeautify({
        indent_size: conf.htmlOptions.indentSize,
        end_with_newline: conf.htmlOptions.endWithNewLine,
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(conf.distribution.base)).on('finish', function() {
        global.browserSync.reload();
    });
});
