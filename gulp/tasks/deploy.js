/**
 * @deploy tasks
 * @return: {stream}
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var ftp = require('./ftp');

// @pathToRoot
// @param: {String}
// -------------------

var pathToRoot = function(fullpath) {
    var remoteDir = conf.ftpOptions.deployOnRemoteFolder;
    var rpath = null;

    if (remoteDir === './' || remoteDir === '/') {
        var dirs = fullpath.substring(fullpath.indexOf('/') + 1);
        rpath = '/' + dirs;

        return rpath;
    } else {
        return fullpath;
    }
};

// @log objects
// -------------------

var log = {
    host: gutil.colors.magenta(ftp.ftphost),
    path: function(p) {
        return gutil.colors.cyan(p);
    },
    rootpath: function(p) {
        return gutil.colors.cyan(pathToRoot(p));
    },
    warn: function(p) {
        return gutil.colors.red(p);
    }
};

// @watch deployOnTheFly objects
// -------------------

var deployOnTheFly = function() {
    var deployObjects = [conf.deployOnTheFlyOptions.deployOnTheFlyFolder];
    deployObjects.push(conf.deployOnTheFlyOptions.deployOnTheFlyObjects);

    return watch(deployObjects, {
        ignored: (conf.deployOnTheFlyOptions.ignoreDotFiles) ? /(^|[\/\\])\../ : '',
        ignoreInitial: conf.deployOnTheFlyOptions.ignoreInitialRun,
        cwd: process.cwd()
    }).on('addDir', function(path) {
        gutil.log("Upload folder '" + log.rootpath(path) + "' on " + log.host);

        ftp.addftpElem(path);
    }).on('unlinkDir', function(path) {
        gutil.log("Remove folder '" + log.rootpath(path) + "' on " + log.host);

        return ftp.ftpconnection.rmdir(pathToRoot(path), function(err) {
            if (err) {
                gutil.log(log.timestamp + ' ' + log.warn(err));
            } else {
                return;
            }
        });
    }).on('add', function(path) {
        gutil.log("Upload file '" + log.rootpath(path) + "' on " + log.host);

        ftp.addftpElem(path);
    }).on('unlink', function(path) {
        gutil.log("Remove file '" + log.rootpath(path) + "' on " + log.host);

        return ftp.ftpconnection.delete(pathToRoot(path), function(err) {
            if (err) {
                console.log(log.timestamp + ' ' + log.warn(err));
            } else {
                return;
            }
        });
    }).on('change', function(path) {
        gutil.log("Upload new file '" + log.rootpath(path) + "' on " + log.host);

        ftp.addftpElem(path);
    });
};

// @deploy on the "fly"
// @return: [stream]
// --------------------

gulp.task('deploy-watch', function() {
    deployOnTheFly();
});
