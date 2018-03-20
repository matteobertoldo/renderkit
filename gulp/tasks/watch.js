// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

const gulp = require('gulp'),
watch = require('gulp-watch'),
conf = require('../gulpconfig'),
sequence = require('run-sequence'),
log = require('fancy-log'),
colors = require('ansi-colors');

let tasks = conf.defaultWatchTasks;
let keys = Object.keys(tasks);

let defaultWatchTasks = keys.filter((key) => {
    return tasks[key];
});

defaultWatchTasks.push('browser-sync');

gulp.task('watch', (done) => {
    if (defaultWatchTasks.length) {
        sequence.apply(null, defaultWatchTasks, done);

        watch([
            conf.workspace.uikit + '**/*.+(html|nunjucks|njk)',
            conf.uikitOptions.dataFilePath
        ], () => {
            gulp.start('uikit:watch');
        })

        watch(conf.workspace.scss, () => {
            gulp.start(['sass:watch', 'sassdoc']);
        });

        watch(conf.workspace.svg, () => {
            gulp.start('svg:watch');
        });
    } else {
        log(colors.red('Set up at least one task to use `gulp watch`'));
    }
});
