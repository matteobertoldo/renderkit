/**
 * @gulp svg task
 * @return: sprite.svg
 * @author: mbertoldo@alpenite.com
 */

 var gulp = require('gulp');
 var conf = require('../gulpconfig');
 var svgSprite = require('gulp-svg-sprite');

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
	 gulp.src(conf.assets.svg + '**/*.svg')
	 .pipe(svgSprite(svgSpriteOptions))
	 .pipe(gulp.dest(conf.distribution.svg));
 });

 gulp.task('svg:watch', ['svg'], function() {
	 gulp.watch(conf.distribution.svg).on('change', function() {
		 global.browserSync.reload();
	 });
 });