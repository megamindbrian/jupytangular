var gulp = require('gulp');
        gulp.series.apply(gulp, tasks.concat([function (done) {
            resolve(done());
        }]))();
    });