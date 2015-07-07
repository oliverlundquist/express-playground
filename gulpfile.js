var gulp = require('gulp');
var exec = require('child_process').exec;
var running = false;

gulp.task('test', function (done) {
    gulp.watch(['app/**/*.js', 'test/**/*.js'], function () {
        if (running) { return; }
        running = true;

        exec('./node_modules/jshint/bin/jshint .', function (error, stdout) {
            if (error !== null) console.log(error);
            console.log(stdout);

            exec('./node_modules/jscs/bin/jscs . --fix', function (error, stdout) {
                if (error !== null) console.log(error);
                console.log(stdout);

                exec('./node_modules/istanbul/lib/cli.js cover ./node_modules/mocha/bin/_mocha -- --recursive --reporter spec', function (error, stdout) {
                    if (error !== null) console.log(error);
                    console.log(stdout);
                    running = false;
                    done();
                })
            })
        })
    });
});
