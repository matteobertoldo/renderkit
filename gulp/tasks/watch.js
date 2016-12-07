/**
 * @gulp watch task
 * @return: [tasks]
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');

gulp.task('watch', ['html', 'sass', 'svg', 'app', 'browser-sync'], function() {
    gulp.watch(conf.workspace.html + '**/*.html', ['html']);
    gulp.watch(conf.workspace.scss + '**/*.scss', ['sass']);
    gulp.watch(conf.workspace.js + '**/*.js', ['app']);
    gulp.watch(conf.assets.svg + '**/*.svg', ['svg']);
});
