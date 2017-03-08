/**
 * @gulp html task
 * @include: gulp-html-tag-include
 * @description: no subfolders detect for don't go in distribution with html partials.
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
var plumber = require('gulp-plumber');
var htmlInclude = require('gulp-html-tag-include');
var htmlBeautify = require('gulp-html-beautify');
var gutil = require('gulp-util');

gulp.task('html', function() {
    return gulp.src(conf.workspace.html + '*.html')
    .pipe(plumber())
    .pipe(htmlInclude({
        prefixVar: conf.htmlOptions.prefixVar
    })).on('error', gutil.log)
    .pipe(htmlBeautify({
        indent_size: conf.htmlOptions.indentSize,
        end_with_newline: conf.htmlOptions.endWithNewLine,
    }))
    .pipe(gulp.dest(conf.distribution.html));
});

gulp.task('html:watch', ['html'], function() {
    return global.browserSync.reload();
});
