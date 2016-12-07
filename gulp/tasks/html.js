/**
 * @gulp html task
 * @include: gulp-html-tag-include
 * @note: no subfolders detect for don't go in distribution with html partials.
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
var include = require('gulp-html-tag-include');
var htmlbeautify = require('gulp-html-beautify');
var gulpUtil = require('gulp-util');

gulp.task('html', function() {
    gulp.src(conf.workspace.html + '*.html')
    .pipe(include({
        prefixVar: '@'
    })).on('error', gulpUtil.log)
    .pipe(htmlbeautify({
        indent_size: conf.htmlOptions.indentSize,
        end_with_newline: conf.htmlOptions.endWithNewLine,
    }))
    .pipe(gulp.dest(conf.distribution.base));
});

gulp.task('html:watch', ['html'], function() {
    gulp.watch(conf.distribution.base + '*.html').on('change', function() {
        global.browserSync.reload();
    });
});
