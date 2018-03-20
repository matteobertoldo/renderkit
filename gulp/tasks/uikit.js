/**
 * @file: nunjucks.js
 * @description: Task for compile Nunjucks files into HTML files. For Nunjucks language & API see more at: https://mozilla.github.io/nunjucks/.
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

gulp.task('uikit', () => {
    return gulp.src(conf.workspace.uikit + '*.+(html|nunjucks|njk)')
    .pipe(plumber())
    .pipe(data((file) => {
        return JSON.parse(fs.readFileSync(path.resolve(conf.uikitOptions.dataFilePath), 'utf8'));
    }))
    .pipe(nunjucksRender({
        path: [conf.workspace.uikit]
    }))
    .on('error', (err) => {
        log('Error in: ' + colors.red(err.plugin));
        log('Message: ' + colors.red(err.message));
        log('File: ' + colors.red(err.fileName));
    })
    .pipe(htmlBeautify({
        indent_size: conf.uikitOptions.indentSize,
        end_with_newline: conf.uikitOptions.endWithNewLine,
    }))
    .pipe(gulp.dest(conf.distribution.uikit));
});

gulp.task('uikit:watch', ['uikit'], () => {
    return global.browserSync.reload();
});
