/**
 * @file: sass.js
 * @description: Task for compile scss files & compress generated css file via `cleanCSS`.
 * @author: mbertoldo@alpenite.com
 */

const gulp = require('gulp'),
gulpif = require('gulp-if'),
conf = require('../gulpconfig'),
plumber = require('gulp-plumber'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
sourcemaps = require('gulp-sourcemaps'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
pxtorem = require('postcss-pxtorem-plus'),
cleanCSS = require('gulp-clean-css');

// @processors
// @include: [autoprefixer, pxtorem]
// ----------------------------------

var processors = [
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

// @remUnit
// @param {bool}
// @return [processors]
// ----------------------------------

if (!conf.cssOptions.remUnit) {
    processors.splice(1,1);
}

// @cleanCSS: (clean + minify mode)
// @param: {bool}
// ----------------------------------

gulp.task('sass', () => {
    return gulp.src(conf.workspace.scss + '**/*.s+(a|c)ss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: conf.cssOptions.outputStyle
    }).on('error', sass.logError))
    .pipe(gulpif(conf.cssOptions.singleOutput, concat(conf.cssOptions.outputName + '.css')))
    .pipe(postcss(processors))
    .pipe(gulp.dest(conf.distribution.scss))
    .pipe(cleanCSS({
        level: (conf.cssOptions.optimizationMinify) ? 2 : 1
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(conf.distribution.scss));
});

gulp.task('sass:watch', ['sass'], () => {
    return global.browserSync.reload();
});
