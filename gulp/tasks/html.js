/**
 * @file html.js
 * @description Task for compile Nunjucks files into HTML files. For Nunjucks language & API see more @https://mozilla.github.io/nunjucks/.
 * @author mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
var fs = require('fs');
var path = require('path');
var plumber = require('gulp-plumber');
var nunjucksRender = require('gulp-nunjucks-render');
var htmlBeautify = require('gulp-html-beautify');
var log = require('fancy-log');
var data = require('gulp-data');
var colors = require('ansi-colors');

// @get "data" options
// @param: file
// @return: {String}
// --------------------

gulp.task('html', function() {
    return gulp.src(conf.workspace.html + '*.+(html|nunjucks|njk)')
    .pipe(plumber())
    .pipe(data(function(file) {
        return JSON.parse(fs.readFileSync(path.resolve(conf.htmlOptions.dataFilePath), 'utf8'));
    }))
    .pipe(nunjucksRender({
        path: [conf.workspace.html]
    }))
    .on('error', function(err) {
        log('Error in: ' + colors.red(err.plugin));
        log('Message: ' + colors.red(err.message));
        log('File: ' + colors.red(err.fileName));
    })
    .pipe(htmlBeautify({
        indent_size: conf.htmlOptions.indentSize,
        end_with_newline: conf.htmlOptions.endWithNewLine,
    }))
    .pipe(gulp.dest(conf.distribution.html));
});

gulp.task('html:watch', ['html'], function() {
    return global.browserSync.reload();
});
