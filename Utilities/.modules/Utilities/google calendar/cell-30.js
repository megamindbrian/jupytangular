var importer = require('../Core');
var path = require('path');
var glob = require('glob');
var fs = require('fs');
var rimraf = require('rimraf');

var DOWNLOADS_PATH = PROFILE_PATH + '/Downloads';

// TODO: run unzip as a service?
var unzip = (file) => {
    console.log('unzipping ' + file);
    return execCmd('unzip "' + file + '"', {}, {cwd: DOWNLOADS_PATH})
}

        'child process'
            execCmd = r[3];
        .then(() => {
            if(fs.existsSync(DOWNLOADS_PATH + '/Takeout')) {
                rimraf.sync(DOWNLOADS_PATH + '/Takeout');
            }
            var takeouts = glob.sync('takeout-*.zip', {cwd: DOWNLOADS_PATH});
            return unzip(path.join(DOWNLOADS_PATH, takeouts.pop()));
        })