// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

import gulp from 'gulp';
import watch from 'gulp-watch';
import conf from '../gulpconfig';
import sequence from 'run-sequence';
import log from 'fancy-log';
import colors from 'ansi-colors';

const tasks = conf.defaultWatchTasks;
const keys = Object.keys(tasks);
const defaultWatchTasks = keys.filter(key => {
    return tasks[key];
});

gulp.task('watch', done => {
    if (defaultWatchTasks.length) {
        defaultWatchTasks.push('browser-sync');
        sequence.apply(null, defaultWatchTasks, done);

        watch([conf.workspace.uikit.base, conf.workspace.uikit.src, conf.workspace.uikit.data], () => {
            gulp.start('uikit:watch');
        });

        watch(conf.workspace.scss, () => {
            sequence.apply(null, ['sass:watch', 'sassdoc', 'copy'], done);
        });
    } else {
        log(colors.red('Set up at least one task to use `gulp watch`'));
    }
});
