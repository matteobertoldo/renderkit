/**
 * @gulp watch task
 * @return: [tasks]
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');

gulp.task('watch', ['html', 'sass', 'svg', 'app', 'browser-sync'], function() {
    gulp.watch(conf.workspace.html + '**/*.html', ['html:watch']);
    gulp.watch(conf.workspace.scss + '**/*.scss', ['sass:watch']);
    gulp.watch(conf.workspace.js + '**/*.js', ['app:watch']);
    gulp.watch(conf.assets.svg + '**/*.svg', ['svg:watch']);
});
