// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

const gulp = require('gulp');
const conf = require('../gulpconfig');

gulp.task('copy', () => {
    return gulp.src(conf.distribution.scss + 'renderkit.min.css')
    .pipe(gulp.dest('docs/css/'))
});
