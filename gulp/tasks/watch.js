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

// @global tasks
// --------------

var tasks = ['html', 'sass', 'svg', 'bundle'];

// @push `browserSync`
// @param: {bool}
// -------------------

if (conf.syncOptions.browserSync) {
    tasks.push('browser-sync');
}

// @watch stream configuration
// @param: {bool}
// @param: ignored: /(^|[\/\\])\../ (dots file)
// -------------------

function stream() {
    return watch(conf.watchOptions.streamDirToWatch, {
        ignoreInitial: true
    }).on('change', function(path) {
        if (conf.watchOptions.log) {
            console.log('[' + gutil.colors.blue(conf.syncOptions.logPrefix) + ']' + " File: '" + gutil.colors.cyan(path) +  "' has been changed");
        }

        if (conf.syncOptions.browserSync && conf.watchOptions.reloadBrowsersOnChange) {
            return global.browserSync.reload();
        }
    });
}

// @init all events
// @start & enjoy.
// -------------------

gulp.task('watch', function(done) {
    sequence.apply(null, tasks, done);
    gulp.watch(conf.workspace.html + '**/*.html', ['html:watch']);
    gulp.watch(conf.workspace.scss + '**/*.scss', ['sass:watch']);
    gulp.watch(conf.workspace.js + '**/*.js', ['bundle:watch']);
    gulp.watch(conf.workspace.svg + '**/*.svg', ['svg:watch']);

    if (conf.watchOptions.stream) {
        stream();
    }
});
