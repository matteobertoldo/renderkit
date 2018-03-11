/**
 * @file clean.js
 * @description Clean all generated file or by tipe.
 * @author mbertoldo@alpenite.com
 * @author mgaion@alpenite.com (regex `split`)
 */

const gulp = require('gulp'),
conf = require('../gulpconfig'),
del = require('del'),
log = require('fancy-log'),
colors = require('ansi-colors');

// @localfiles
// @return: {string} || [arr]
// -------------------

if (conf.cleanOptions.cleanAllDistributionFiles) {
    let vals = Object.keys(conf.cleanOptions.generatedFiles).map((key) => {
        return conf.cleanOptions.generatedFiles[key];
    });
    var localfiles = vals.toString().split(/,(?=[^}]*(?:{|$))/);
} else {
    var localfiles = conf.cleanOptions.cleanFilesByType();
}

// @clean
// @return: [files]
// -------------------

gulp.task('clean', () => {
    del(localfiles, {
        dryRun: conf.cleanOptions.dryRun,
        force: conf.cleanOptions.forceDelete
    }).then((paths) => {
        if (conf.cleanOptions.dryRun) {
            if (paths.length > 0)  {
                log('Files and/or folders that would be deleted:\n' + colors.yellow(paths.join('\n').trim()));
            } else {
                log(colors.yellow('Nothing will be deleted'));
            }
        } else {
            if (paths.length > 0)  {
                log('Files and/or folders deleted:\n' + colors.red(paths.join('\n')));
            } else {
                log(colors.green('Nothing to delete'));
            }
        }
    });
});
