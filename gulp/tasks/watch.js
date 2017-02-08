/**
 * @gulp watch tasks
 * @return: {tasks}
 * @description: gulp is watching you...
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
var sequence = require('run-sequence');

// @global tasks
// --------------

var tasks = ['html', 'sass', 'svg', 'bundle'];

// @push `browserSync`
// @param: {bool}
// -------------------

if (conf.syncOptions.browserSync) {
    tasks.push('browser-sync');
}

// @init all events
// @start & enjoy.
// -------------------

gulp.task('start', function(done) {
    sequence.apply(null, tasks, done);
    gulp.watch(conf.workspace.html + '**/*.html', ['html:watch']);
    gulp.watch(conf.workspace.scss + '**/*.scss', ['sass:watch']);
    gulp.watch(conf.workspace.js + '**/*.js', ['bundle:watch']);
    gulp.watch(conf.workspace.svg + '**/*.svg', ['svg:watch']);
});
