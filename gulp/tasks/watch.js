// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

const gulp = require('gulp');
const watch = require('gulp-watch');
const conf = require('../gulpconfig');
const sequence = require('run-sequence');
const log = require('fancy-log');
const colors = require('ansi-colors');

let tasks = conf.defaultWatchTasks;
let keys = Object.keys(tasks);

let defaultWatchTasks = keys.filter((key) => {
    return tasks[key];
});

gulp.task('watch', (done) => {
    if (defaultWatchTasks.length) {
        defaultWatchTasks.push('browser-sync');
        sequence.apply(null, defaultWatchTasks, done);

        watch([conf.workspace.uikit.src, conf.workspace.uikit.data], () => {
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
