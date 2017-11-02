/**
 * @file: clean.js
 * @description: Clean all generated file or by tipe.
 * @author: mbertoldo@alpenite.com
 * @author: mgaion@alpenite.com (regex `split`)
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
var gutil = require('gulp-util');
var del = require('del');

// @localfiles
// @return: {string} || [arr]
// -------------------

if (conf.cleanOptions.cleanAllDistributionFiles) {
    var vals = Object.keys(conf.cleanOptions.generatedFiles).map(function(key) {
        return conf.cleanOptions.generatedFiles[key];
    });
    var localfiles = vals.toString().split(/,(?=[^}]*(?:{|$))/);
} else {
    var localfiles = conf.cleanOptions.cleanFilesByType();
}

// @clean
// @return: [files]
// -------------------

gulp.task('clean', function() {
    del(localfiles, {
        dryRun: conf.cleanOptions.dryRun,
        force: conf.cleanOptions.forceDelete
    }).then(function(paths) {
        if (conf.cleanOptions.dryRun) {
            if (paths.length > 0)  {
                console.log('Files and/or folders that would be deleted:\n' + gutil.colors.yellow(paths.join('\n').trim()));
            } else {
                console.log(gutil.colors.yellow('Nothing will be deleted'));
            }
        } else {
            if (paths.length > 0)  {
                console.log('Files and/or folders deleted:\n' + gutil.colors.red(paths.join('\n')));
            } else {
                console.log(gutil.colors.green('Nothing to delete'));
            }
        }
    });
});
