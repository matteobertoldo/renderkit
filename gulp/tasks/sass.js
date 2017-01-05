/**
 * @gulp sass task
 * @include: postcss processors
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var gulpif = require('gulp-if');
var conf = require('../gulpconfig');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem-plus');
var cleanCSS = require('gulp-clean-css');

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
// @param: {bool}
// @return: [processors]
// ----------------------------------

if(!conf.cssOptions.remUnit) {
    processors.splice(1,1);
}

// @cleanCSS clean + minify mode
// @param: {bool}
// ----------------------------------

gulp.task('sass', function() {
    return gulp.src(conf.workspace.scss + '**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: conf.cssOptions.outputStyle
    }).on('error', sass.logError))
    .pipe(plumber())
    .pipe(concat(conf.cssOptions.outputName + '.css'))
    .pipe(postcss(processors))
    .pipe(gulpif(conf.cssOptions.minifyCSS, cleanCSS()))
    .pipe(gulpif(conf.cssOptions.minifyCSS, rename({
        suffix: '.min'
    })))
    .pipe(sourcemaps.write('./'))
    .pipe(plumber.stop())
    .pipe(gulp.dest(conf.distribution.css));
});

gulp.task('sass:watch', ['sass'], function() {
    return global.browserSync.reload();
});
