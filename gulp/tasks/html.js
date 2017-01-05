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
var gutil = require('gulp-util');

gulp.task('html', function() {
    return gulp.src(conf.workspace.html + '*.html')
    .pipe(plumber())
    .pipe(include({
        prefixVar: conf.htmlOptions.prefixVar
    })).on('error', gutil.log)
    .pipe(htmlbeautify({
        indent_size: conf.htmlOptions.indentSize,
        end_with_newline: conf.htmlOptions.endWithNewLine,
    }))
    .pipe(gulp.dest(conf.distribution.base));
});

gulp.task('html:watch', ['html'], function() {
    return global.browserSync.reload();
});
