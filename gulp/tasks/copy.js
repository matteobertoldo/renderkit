// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

import gulp from 'gulp';
import conf from '../gulpconfig';

gulp.task('copy', () => {
    return gulp.src([
        conf.distribution.scss + 'renderkit.min.css',
        conf.distribution.scss + 'renderkit.min.css.map',
    ])
    .pipe(gulp.dest('docs/css/'));
});
