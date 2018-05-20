// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

const gulp = require('gulp');
const gulpif = require('gulp-if');
const conf = require('../gulpconfig');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem-plus');
const cleanCSS = require('gulp-clean-css');
const sassdoc = require('sassdoc');

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
