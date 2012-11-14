var wizardry = require('./lib/wizardry');
var task = require('./tasks/rotate');

var callback = function(status) {
	if (status === false) {
		return false;
	} else {
		return true;
	}
}

wizardry.process('aHHVC.png', task, callback());