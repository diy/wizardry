/**
 * Wizardry tests (Are ye' truly a wizard, Harry?)
 *
 * @package wizardry
 * @author Zachary Bruggeman <zbruggeman@me.com>
 */

 /**
  * Dependencies
  */

var async = require('async'),
    test  = require('tap').test,
    task = require('./sepia.json'),
    image = require('canada.png');
    wizardry = require('./../lib/wizardry');

/**
 * Suite
 */
var allGood = true;
async.auto({

	process: function(callback) {
		var callback = function(err) {
		    if (err) {
		    	allGood = false;
		    	return false;
		    };
		};
		wizardry([image], task, callback);
	},

	test: ['process', function(callback, obj) {
		test('Component definition', function(t) {
			t.type(wizardry, 'function', 'Wizardry should be a function.');
			t.type(task, 'object', 'Task should be an object.');
			t.end();
		});
		test('Callback return', function(t) {
			t.equals(allGood, true, 'Make sure our callback did not return an error');
			t.end();
		});

		callback();
	}]

}, function(err, obj) {
	test('Catch errors', function(t) {
		t.equal(err, null, 'Errors should be null.');
		t.end();
	});
});