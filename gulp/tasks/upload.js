/**
 * @deploy tasks
 * @return: {stream}
 * @author: mbertoldo@alpenite.com
 */

var gulp = require('gulp');
var conf = require('../gulpconfig');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var ftp = require('vinyl-ftp');
var ftpconfig = require('../private/ftp.json');

// @timestamp log
// @return: {String}
// -------------------

function timestamp() {
    var date = new Date();
    var hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    var minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    var seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    var timestamp = hours + ':' + minutes + ':' + seconds;

    return timestamp;
}

// @pathToRoot
// @param: {func}
// @return: {String}
// -------------------

function pathToRoot(fullpath) {
    var remoteDir = conf.ftpOptions.deployOnRemoteFolder;
    var rpath = null;

    if (remoteDir === './' || remoteDir === '/') {
        var dirs = fullpath.substring(fullpath.indexOf('/') + 1);
        rpath = '/' + dirs;

        return rpath;
    } else {
        return fullpath;
    }
}

// @log objects
// -------------------

var log = {
    timestamp: '[' + gutil.colors.gray(timestamp()) + ']',
    host: gutil.colors.magenta(ftpconfig.host),
    path: function(p) {
        return gutil.colors.cyan(p);
    },
    rootpath: function(p) {
        return gutil.colors.cyan(pathToRoot(p));
    }
};

// @ftp `create` options
// @return: {Obj}
// --------------------

var ftpconnection = ftp.create({
    secure: conf.ftpOptions.sftpConnection,
    host: ftpconfig.host,
    user: ftpconfig.user,
    password: ftpconfig.password,
    port: ftpconfig.port,
    parallel: conf.ftpOptions.parallelUploads,
    reload: conf.ftpOptions.cacheReload,
    debug: conf.ftpOptions.debugMode,
    log: (conf.ftpOptions.log) ? gutil.log : null
});

// @function: addftpElem
// @return: [stream]
// -------------------

function addftpElem(fullpath) {
    return gulp.src(fullpath, {
        base: conf.deployOnTheFlyOptions.deployOnTheFlyFolder,
        buffer: false
    }).pipe(ftpconnection.newer(conf.ftpOptions.deployOnRemoteFolder))
    .pipe(ftpconnection.dest(conf.ftpOptions.deployOnRemoteFolder));
}

// @watch deployOnTheFly objects
// -------------------

function deployOnTheFly() {
    var deployObjects = [conf.deployOnTheFlyOptions.deployOnTheFlyFolder];
    deployObjects.push(conf.deployOnTheFlyOptions.deployOnTheFlyObjects);

    return watch(deployObjects, {
        ignored: (conf.deployOnTheFlyOptions.ignoreDotFiles) ? /(^|[\/\\])\../ : '',
        ignoreInitial: conf.deployOnTheFlyOptions.ignoreInitialRun,
        cwd: process.cwd()
    }).on('addDir', function(path) {
        console.log(log.timestamp + " Uploading folder '" + log.rootpath(path) + "' on " + log.host);
        addftpElem(path);
    }).on('unlinkDir', function(path) {
        console.log(log.timestamp + " Removing folder '" + log.rootpath(path) +  "' on " + log.host);

        return ftpconnection.rmdir(pathToRoot(path), function(err) {
            if (err) {
                console.log(log.timestamp + ' ' + gutil.colors.red(err));
            } else {
                return;
            }
        });
    }).on('add', function(path) {
        addftpElem(path);
        console.log(log.timestamp + " Uploading file '" + log.rootpath(path) +  "' on " + log.host);
    }).on('unlink', function(path) {
        console.log(log.timestamp + " Removing file '" + log.rootpath(path) +  "' on " + log.host);

        return ftpconnection.delete(pathToRoot(path), function(err) {
            if (err) {
                console.log(log.timestamp + ' ' + gutil.colors.red(err));
            } else {
                return;
            }
        });
    }).on('change', function(path) {
        addftpElem(path);
        console.log(log.timestamp + " Uploading new file '" + log.rootpath(path) +  "' on " + log.host);
    });
}

// @deploy ftp options
// @return: [stream]
// --------------------

gulp.task('ftp:fileslog', function() {
    return ftpconnection,
    ftpconnection.src(conf.ftpOptions.deployOnRemoteFolder + '**/*');
});

gulp.task('ftp:deploy', function() {
    return ftpconnection,
    gulp.src(conf.ftpOptions.folderAndFilesForDeploy, {
        buffer: false
    }).pipe(ftpconnection.newer(conf.ftpOptions.deployOnRemoteFolder))
    .pipe(ftpconnection.dest(conf.ftpOptions.deployOnRemoteFolder))
    .pipe(ftpconnection.clean(conf.ftpOptions.deployOnRemoteFolder + '**', conf.ftpOptions.baseFolderForDeploy));
});

gulp.task('ftp:cleandir', function() {
    return ftpconnection,
    ftpconnection.rmdir(conf.ftpOptions.remoteFolderToDelete, function(err) {
        if (err) {
            console.log(gutil.colors.red(err));
        } else {
            return;
        }
    });
});

// @deploy on the "fly"
// @return: [stream]
// --------------------

gulp.task('deploy-watch', function() {
    deployOnTheFly();
});
