var assert = require('assert');
var request = require('request');
var myServer = require('../index');

describe('An HTTP Server'), function());

	before(function(done) {
		freeport(function(err, port) {
			this.uri = 'http://localhost:'+ port;
			myServer.listen(port, done)
		}.bind(this));
	
	}


	after(function(stop){
		//stop server
		myServer.stop
	}

	it('should make a request'), function(done) {
		request('http://localhost:3000', function(err, 0) {
			if (err) {
				throw err;
			})
		assert.equal(resp.statusCode, 200)
		done()
		}
	}
	it('should return the value of arbitrary shell command'), function(exec) {
		// Need real value of command to pass to REST interface in 
		request.put({
			url: 'http://localhost:3000'
			body: 'uptime'
		}, function(err, resp, body) {
			if (err) {
				throw err;
			}
			// Ensure that puts returns 
			assert.equal(resp.statusCode, 200)
			// Ensure the body is stringy
			assert.typeOf(body, string)
		}) 

