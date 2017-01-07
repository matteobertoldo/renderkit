/**
 * @gulp watch tasks
 * @return: {tasks}
 * @description: gulp is watching you...
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
var sequence = require('run-sequence');

gulp.task('start', function(done) {
    if(conf.syncOptions.browserSync) {
        sequence('html', 'sass', 'svg', 'scripts', 'browser-sync', done);
    } else {
        sequence('html', 'sass', 'svg', 'scripts', done);
    }

    gulp.watch(conf.workspace.html + '**/*.html', ['html:watch']);
    gulp.watch(conf.workspace.scss + '**/*.scss', ['sass:watch']);
    gulp.watch(conf.workspace.js + '**/*.js', ['scripts:watch']);
    gulp.watch(conf.workspace.svg + '**/*.svg', ['svg:watch']);
});
