// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

import gulp from 'gulp';
import gulpif from 'gulp-if';
import conf from '../gulpconfig';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem-plus';
import cleanCSS from 'gulp-clean-css';
import sassdoc from 'sassdoc';

let processors = [
    autoprefixer({
        browsers: conf.cssOptions.browsersSupport,
        flexbox: conf.cssOptions.flexbox,
        grid: conf.cssOptions.msGridLayout
    }),
    pxtorem({
        replace: conf.cssOptions.replaceRemUnit,
        unitPrecision: conf.cssOptions.unitRemPrecision,
        propList: conf.cssOptions.remPropList,
        mediaQuery: conf.cssOptions.remMediaQueries
    })
];

if (!conf.cssOptions.remUnit) {
    processors.splice(1,1);
}

gulp.task('sass', () => {
    return gulp.src(conf.workspace.scss)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: conf.cssOptions.outputStyle
    }).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(conf.distribution.scss))
    .pipe(cleanCSS({
        level: (conf.cssOptions.optimizationMinify) ? 2 : 1
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(conf.distribution.scss))
});

gulp.task('sassdoc', () => {
    return gulp.src(conf.workspace.sassdoc)
    .pipe(sassdoc({
        dest: conf.distribution.sassdoc
    }))
    .resume()
});

gulp.task('sass:watch', ['sass'], () => {
    return global.browserSync.reload();
});
