var assert = require('assert');
var request = require('request');
var freeport = require('freeport')
var myServer = require('../index');

describe('An HTTP Server', function() {

	before(function(done) {
		freeport(function(err, port) {
			this.uri = 'http://localhost:'+ port;
			myServer.listen(port, done)
		}.bind(this))
	});

	it('server should be responding 200', function(done) {
		console.log("Testing server availability:")
		console.log(this.uri)
		request(this.uri, function(err, resp, body) {
			if (err) {
				throw err;
			}
			assert.equal(resp.statusCode, 200)
			done()
		})
	})

	it('should return the value of arbitrary shell command', function(done) {
		// Need real value of command to pass to REST interface in 
		request.put({
			url: this.uri,
			body: 'hostname'
		}, function(err, resp, body) {
			if (err) {
				throw err;
			}
			// Ensure that puts returns 
			assert.equal(resp.statusCode, 200)
			// Ensure the body is stringy
			assert.typeOf(body, string)
			done()
		}) 
	});
});
