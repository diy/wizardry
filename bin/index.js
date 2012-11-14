#!/usr/bin/env node
var argv = require('optimist').demand(['i', 't']).argv,
    wizardry = require('./../lib/wizardry');

var callback = function(err) {
    if (err) { console.dir(err); };
}

wizardry([__dirname + '/' + argv.i], require('./' + argv.t), callback);

