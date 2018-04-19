// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const conf = require('../gulpconfig');
const sasslint = require('gulp-sass-lint');

gulp.task('lint:sass', () => {
    return gulp.src(conf.workspace.scss)
    .pipe(plumber())
    .pipe(sasslint({
        configFile: './.sass-lint.yml'
    }))
    .pipe(sasslint.format())
});

gulp.task('lint:watch', ['lint:sass'], () => {
    return global.browserSync.reload();
});
