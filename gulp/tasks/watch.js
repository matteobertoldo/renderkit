/**
 * @file watch.js
 * @description gulp is watching you...
 * @author mbertoldo@alpenite.com
 */

const gulp = require('gulp'),
watch = require('gulp-watch'),
conf = require('../gulpconfig'),
sequence = require('run-sequence'),
log = require('fancy-log'),
colors = require('ansi-colors');

// @default watch tasks
// --------------

let tasks = conf.defaultWatchTasks;
let keys = Object.keys(tasks);

let defaultWatchTasks = keys.filter((key) => {
    return tasks[key];
});

// @push `browser-sync`
// @param {bool}
// -------------------

if (conf.syncOptions.browserSync) {
    defaultWatchTasks.push('browser-sync');
}

// @init all events
// @start & enjoy
// -------------------

gulp.task('watch', (done) => {
    if (defaultWatchTasks.length) {
        sequence.apply(null, defaultWatchTasks, done);
        gulp.watch([conf.workspace.uikit + '**/*.+(html|nunjucks|njk)', conf.workspace.uikit + '**/*.json'], ['nunjucks:watch']);
        gulp.watch(conf.workspace.scss + '**/*.scss', ['sass:watch']);
        gulp.watch(conf.workspace.svg + '**/*.svg', ['svg:watch']);
    } else {
        log(colors.red('Set up at least one task to use `gulp watch`'));
    }
});
