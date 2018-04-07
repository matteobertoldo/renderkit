// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

const gulp = require('gulp');
const gulpif = require('gulp-if');
const conf = require('../gulpconfig');
const fs = require('fs');
const path = require('path');
const plumber = require('gulp-plumber');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const htmlclean = require('gulp-htmlclean');
const htmlbeautify = require('gulp-html-beautify');
const minifyInline = require('gulp-minify-inline');
const log = require('fancy-log');
const colors = require('ansi-colors');

gulp.task('uikit', () => {
    return gulp.src(conf.workspace.uikit.src)
    .pipe(plumber())
    .pipe(data(() => {
        return JSON.parse(fs.readFileSync(path.resolve(conf.workspace.uikit.data), 'utf8'));
    })).on('error', (err) => {
        log('Error in: ' + colors.red(err.plugin));
        log('Message: ' + colors.red(err.message));
    })
    .pipe(nunjucksRender({
        path: [conf.workspace.uikit.base]
    })).on('error', (err) => {
        log('Error in: ' + colors.red(err.plugin));
        log('Message: ' + colors.red(err.message));
        log('File: ' + colors.red(err.fileName));
    })
    .pipe(htmlclean())
    .pipe(htmlbeautify({
        indent_size: conf.uikitOptions.indentSize,
        end_with_newline: conf.uikitOptions.endWithNewLine,
    }))
    .pipe(gulpif(conf.uikitOptions.minifyInline, minifyInline({
        css: {
            level: 2
        }
    })))
    .pipe(gulp.dest(conf.distribution.uikit));
});

gulp.task('uikit:watch', ['uikit'], () => {
    return global.browserSync.reload();
});
