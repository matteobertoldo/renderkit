/**
 * @gulp watch tasks
 * @return: {tasks}
 * @description: gulp is watching you...
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var conf = require('../gulpconfig');
var sequence = require('run-sequence');

// @watch stream configuration
// @return: browserSync.reload()
// -------------------

function stream() {
    if (conf.syncOptions.stream) {
        return watch(conf.syncOptions.streamFoldersToWatch, {
            ignoreInitial: true,
            cwd: process.cwd()
        }).on('change', function(path) {
            if (conf.syncOptions.streamLog) {
                console.log(log.timestamp + " File '" + log.path(path) +  "' has been changed");
            }

            if (conf.syncOptions.browserSync && conf.syncOptions.reloadBrowsersOnChange) {
                return global.browserSync.reload();
            }
        });
    }
}

// @global tasks
// --------------

var tasks = ['html', 'sass', 'svg', 'bundle'];

// @push `browser-sync`
// @param: {bool}
// -------------------

if (conf.syncOptions.browserSync) {
    tasks.push('browser-sync');
}

// @push `deploy-watch`
// @param: {bool}
// -------------------

if (conf.deployOnTheFlyOptions.deployOnTheFly) {
    tasks.push('deploy-watch');
}

// @init all events
// @start & enjoy
// -------------------

gulp.task('watch', function(done) {
    sequence.apply(null, tasks, done);
    gulp.watch(conf.workspace.html + '**/*.html', ['html:watch']);
    gulp.watch(conf.workspace.scss + '**/*.scss', ['sass:watch']);
    gulp.watch(conf.workspace.js + '**/*.js', ['bundle:watch']);
    gulp.watch(conf.workspace.svg + '**/*.svg', ['svg:watch']);
    stream();
});
