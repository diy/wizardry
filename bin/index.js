#!/usr/bin/env node
var optimist = require('optimist'),
    wizardry = require('./../lib/wizardry');

var stdout = function(err) {
    if (err) { console.dir(err); };
}

var argv = optimist.usage('Usage: $0 [images] [task]')
    .demand(['i', 't'])
    .alias('i', 'image')
    .alias('t', 'task')
    .describe('i', 'Image(s) to be processed.')
    .describe('t', 'Task file used to process images.')
    .argv;

wizardry([__dirname + '/' + argv.i], require('./' + __dirname + '/' + argv.t), stdout);

