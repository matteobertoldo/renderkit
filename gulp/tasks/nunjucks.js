/**
 * @file: html.js
 * @description: Task for compile Nunjucks files into HTML files. For Nunjucks language & API see more @https://mozilla.github.io/nunjucks/.
 * @author: mbertoldo@alpenite.com
 */

const gulp = require('gulp'),
conf = require('../gulpconfig'),
fs = require('fs'),
path = require('path'),
plumber = require('gulp-plumber'),
nunjucksRender = require('gulp-nunjucks-render'),
data = require('gulp-data'),
htmlBeautify = require('gulp-html-beautify'),
log = require('fancy-log'),
colors = require('ansi-colors');

// @get "data" options
// @param: file
// @return: {String}
// --------------------

gulp.task('nunjucks', () => {
    return gulp.src(conf.workspace.uikit + '*.+(html|nunjucks|njk)')
    .pipe(plumber())
    .pipe(data((file) => {
        return JSON.parse(fs.readFileSync(path.resolve(conf.nunjucksOptions.dataFilePath), 'utf8'));
    }))
    .pipe(nunjucksRender({
        path: [conf.workspace.uikit]
    }))
    .on('error', function(err) {
        log('Error in: ' + colors.red(err.plugin));
        log('Message: ' + colors.red(err.message));
        log('File: ' + colors.red(err.fileName));
    })
    .pipe(htmlBeautify({
        indent_size: conf.nunjucksOptions.indentSize,
        end_with_newline: conf.nunjucksOptions.endWithNewLine,
    }))
    .pipe(gulp.dest(conf.distribution.uikit));
});

gulp.task('nunjucks:watch', ['nunjucks'], () => {
    return global.browserSync.reload();
});
