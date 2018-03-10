/**
 * @file svg.js
 * @description Generate an "svg-spritemaps".
 * @author mbertoldo@alpenite.com
 */

let gulp = require('gulp'),
conf = require('../gulpconfig'),
svgSprite = require('gulp-svg-sprite'),
plumber = require('gulp-plumber'),
log = require('fancy-log');

// @svg `spritemap` options
// --------------

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
    return gulp.src(conf.workspace.svg + '**/*.svg')
    .pipe(plumber())
    .pipe(svgSprite(svgSpriteOptions)).on('error', log)
    .pipe(gulp.dest(conf.distribution.svg));
});

gulp.task('svg:watch', ['svg'], () => {
    return global.browserSync.reload();
});
