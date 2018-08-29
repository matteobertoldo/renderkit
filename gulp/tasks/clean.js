// RenderKit
// github.com/matteobertoldo/renderkit
// Licensed under MIT Open Source

import gulp from 'gulp';
import conf from '../gulpconfig';
import del from 'del';
import log from 'fancy-log';
import colors from 'ansi-colors';

if (conf.cleanOptions.cleanAllGeneratedFiles) {
    let vals = Object.keys(conf.cleanOptions.generatedFiles).map(key => {
        return conf.cleanOptions.generatedFiles[key];
    });
    var localfiles = vals.toString().split(/,(?=[^}]*(?:{|$))/);
} else {
    var localfiles = conf.cleanOptions.cleanFilesByType();
}

gulp.task('clean', () => {
    del(localfiles, {
        dryRun: conf.cleanOptions.dryRun,
        force: conf.cleanOptions.forceDelete
    }).then(paths => {
        if (conf.cleanOptions.dryRun) {
            if (paths.length > 0)  {
                log(`Files and/or folders that would be deleted:\n${colors.yellow(paths.join('\n').trim())}`);
            } else {
                log(colors.yellow('Nothing will be deleted'));
            }
        } else {
            if (paths.length > 0)  {
                log(`Files and/or folders deleted:\n${colors.red(paths.join('\n'))}`);
            } else {
                log(colors.green('Nothing to delete'));
            }
        }
    });
});
