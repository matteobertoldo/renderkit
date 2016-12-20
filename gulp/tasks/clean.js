/**
 * @clean task
 * @return: global clean || by type files
 * @author: mbertoldo@alpenite.com
 * @contributor: mgaion@alpenite.com (regex split)
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
var gutil = require('gulp-util');
var del = require('del');

// @filesType
// @return: {string} || [arr]
// -------------------

if(conf.cleanOptions.cleanGlobalDistFiles) {
    var filesType = Object.values(conf.cleanOptions.cleanAllFiles).toString().split(/,(?=[^}]*(?:{|$))/);
} else {
    var filesType = conf.cleanOptions.cleanFilesType;
}

// @dryRun
// @note: if dryRun will be `true` tou can see only on console the files or folders that would be deleted.

gulp.task('clean', function() {
    del(filesType, {
        dryRun: conf.cleanOptions.dryRun,
        force: conf.cleanOptions.forceDelete
    }).then(function(paths) {
        if(conf.cleanOptions.dryRun) {
            if(paths.length > 0)  {
                console.log('Files and folders that would be deleted:\n', gutil.colors.yellow(paths.join('\n')));
            } else {
                console.log(gutil.colors.yellow('Nothing will be deleted'));
            }
        } else {
            if(paths.length > 0)  {
                console.log('Files and/or folders deleted:\n', gutil.colors.red(paths.join('\n')));
            } else {
                console.log(gutil.colors.green('Nothing to delete'));
            }
        }
    });
});