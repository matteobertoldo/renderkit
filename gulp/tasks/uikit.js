// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

import gulp from 'gulp';
import gulpif from 'gulp-if';
import conf from '../gulpconfig';
import fs from 'fs';
import path from 'path';
import plumber from 'gulp-plumber';
import nunjucksRender from 'gulp-nunjucks-render';
import htmlclean from 'gulp-htmlclean';
import htmlbeautify from 'gulp-html-beautify';
import minifyInline from 'gulp-minify-inline';
import log from 'fancy-log';
import colors from 'ansi-colors';

gulp.task('uikit', () => {
    return gulp.src(conf.workspace.uikit.src)
    .pipe(plumber())
    .pipe(nunjucksRender({
        path: [conf.workspace.uikit.base],
        data: JSON.parse(fs.readFileSync(path.resolve(conf.workspace.uikit.data), 'utf8')),
        ext: conf.uikitOptions.outputExt
    })).on('error', err => {
        log('Error in: ' + colors.red(err.plugin));
        log('Message: ' + colors.red(err.message));
        log('File: ' + colors.red(err.fileName));
    })
    .pipe(htmlclean())
    .pipe(gulpif(conf.uikitOptions.beautify, htmlbeautify({
        indent_size: conf.uikitOptions.indentSize,
        end_with_newline: conf.uikitOptions.endWithNewLine,
    })))
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
