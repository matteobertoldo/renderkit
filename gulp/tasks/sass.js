/**
 * @gulp sass task
 * @include: postcss processors
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
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

gulp.task('sass', function() {
    gulp.src(conf.workspace.scss + '**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: conf.cssOptions.outputStyle
    }).on('error', sass.logError))
    .pipe(concat(conf.cssOptions.outputName + '.css'))
    .pipe(postcss(processors))
    .pipe(cleanCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(conf.distribution.css));
});

gulp.task('sass:watch', ['sass'], function() {
    gulp.watch(conf.distribution.css + '*.css').on('change', function() {
        global.browserSync.reload();
    });
});
