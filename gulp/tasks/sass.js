// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

const gulp = require('gulp'),
streamCombiner = require('stream-combiner'),
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
cleanCSS = require('gulp-clean-css'),
sassdoc = require('sassdoc');

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

if (!conf.cssOptions.remUnit) {
    processors.splice(1,1);
}

function dest(path) {
    return streamCombiner(conf.distribution.scss.map((path) => {
        return gulp.dest(path);
    }));
}

gulp.task('sass', () => {
    return gulp.src(conf.workspace.scss)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: conf.cssOptions.outputStyle
    }).on('error', sass.logError))
    .pipe(gulpif(conf.cssOptions.singleOutput, concat(conf.cssOptions.outputName + '.css')))
    .pipe(postcss(processors))
    .pipe(dest(conf.distribution.scss))
    .pipe(cleanCSS({
        level: (conf.cssOptions.optimizationMinify) ? 2 : 1
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(conf.distribution.scss))
});

gulp.task('sassdoc', () => {
    return gulp.src(conf.workspace.scss)
    .pipe(sassdoc({
        dest: conf.cssOptions.sassdocDist
    }))
    .resume()
});

gulp.task('sass:watch', ['sass'], () => {
    return global.browserSync.reload();
});
