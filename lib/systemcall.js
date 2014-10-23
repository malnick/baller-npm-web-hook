var exec = require('child_process').exec
var safeCommands = {
	'uptime': 'uptime',
	'diskspace': 'df -h',
}

module.exports = function(command, callback) {
	var cmd = safeCommands[command] 
	if (cmd) {
		exec(cmd, function(error,stdout,stderr) {
			if (error != null) {
				return callback(error)
			}
			callback(null, stdout);
		});
	}
	else { 
		callback(new Error("Command not available: "+ cmd));
	}
}
