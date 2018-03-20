// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

const gulp = require('gulp'),
conf = require('../gulpconfig'),
svgSprite = require('gulp-svg-sprite'),
plumber = require('gulp-plumber'),
log = require('fancy-log');

var svgSpriteOptions = {
    mode: {
        symbol: {
            dist: './',
            prefix: '.svg--%s',
            sprite: conf.svgOptions.outputName + '.svg',
            example: conf.svgOptions.exampleFile
        }
    }
};

gulp.task('svg', () => {
    return gulp.src(conf.workspace.svg)
    .pipe(plumber())
    .pipe(svgSprite(svgSpriteOptions)).on('error', log)
    .pipe(gulp.dest(conf.distribution.svg));
});

gulp.task('svg:watch', ['svg'], () => {
    return global.browserSync.reload();
});
