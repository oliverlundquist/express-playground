./node_modules/jshint/bin/jshint .
./node_modules/jscs/bin/jscs . --fix
./node_modules/istanbul/lib/cli.js cover ./node_modules/mocha/bin/_mocha -- --recursive --reporter spec
