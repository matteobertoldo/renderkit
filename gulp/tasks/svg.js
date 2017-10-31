/**
 * @file: svg.js
 * @description: Generate an "svg-spritemaps".
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
var gutil = require('gulp-util');
var svgSprite = require('gulp-svg-sprite');
var plumber = require('gulp-plumber');

// @svg `spritemap` options
// --------------

var svgSpriteOptions = {
    mode: {
        symbol: {
            render: {
                css: conf.svgOptions.cssRender,
                scss: conf.svgOptions.scssRender
            },
            dist: './',
            prefix: '.svg--%s',
            sprite: conf.svgOptions.outputName + '.svg',
            example: conf.svgOptions.exampleFile
        }
    }
};

gulp.task('svg', function() {
    return gulp.src(conf.workspace.svg + '**/*.svg')
    .pipe(plumber())
    .pipe(svgSprite(svgSpriteOptions)).on('error', gutil.log)
    .pipe(gulp.dest(conf.distribution.svg));
});

gulp.task('svg:watch', ['svg'], function() {
    return global.browserSync.reload();
});
