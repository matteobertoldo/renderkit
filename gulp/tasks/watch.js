/**
 * @gulp watch task
 * @return: {tasks}
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');

gulp.task('watch', ['html', 'sass', 'svg', 'scripts', 'browser-sync'], function() {
    gulp.watch(conf.workspace.html + '**/*.html', ['html']);
    gulp.watch(conf.workspace.scss + '**/*.scss', ['sass']);
    gulp.watch(conf.workspace.js + '**/*.js', ['scripts']);
    gulp.watch(conf.workspace.svg + '**/*.svg', ['svg']);
});
