/**
 * @file deploy.js
 * @return {stream}
 * @author mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
var watch = require('gulp-watch');
var ftp = require('./ftp');
var fancylog = require('fancy-log');
var colors = require('ansi-colors');

// @pathToRoot
// @param: {String}
// -------------------

var pathToRoot = function(fullpath) {
    var remoteDir = conf.ftpOptions.deployOnRemoteFolder;
    var level = conf.ftpOptions.levelFolderForDeploy;
    var rpath = null;

    if (remoteDir === './' || remoteDir === '/') {
        var dirs = fullpath.substring(fullpath.indexOf('/') + level);
        rpath = '/' + dirs;

        return rpath;
    } else {
        return fullpath;
    }
};

// @log objects
// -------------------

var log = {
    host: colors.magenta(ftp.ftphost),
    path: function(p) {
        return colors.cyan(p);
    },
    rootpath: function(p) {
        return colors.cyan(pathToRoot(p));
    },
    warn: function(p) {
        return colors.red(p);
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
        fancylog("Upload folder '" + log.rootpath(path) + "' on " + log.host);

        ftp.addftpElem(path);
    }).on('unlinkDir', function(path) {
        fancylog("Remove folder '" + log.rootpath(path) + "' on " + log.host);

        return ftp.ftpconnection.rmdir(pathToRoot(path), function(err) {
            if (err) {
                log(log.warn(err));
            } else {
                return;
            }
        });
    }).on('add', function(path) {
        fancylog("Upload file '" + log.rootpath(path) + "' on " + log.host);

        ftp.addftpElem(path);
    }).on('unlink', function(path) {
        fancylog("Remove file '" + log.rootpath(path) + "' on " + log.host);

        return ftp.ftpconnection.delete(pathToRoot(path), function(err) {
            if (err) {
                fancylog(log.warn(err));
            } else {
                return;
            }
        });
    }).on('change', function(path) {
        fancylog("Upload new file '" + log.rootpath(path) + "' on " + log.host);

        ftp.addftpElem(path);
    });
};

// @deploy on the "fly"
// @return: [stream]
// --------------------

gulp.task('deploy-watch', function() {
    deployOnTheFly();
});
