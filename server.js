var express = require('express')
  , myServer = express()
  , bodyParser = require('body-parser')
  , jsonParser = bodyParser.json()
  , systemcall = require('./systemcall')

myServer.use(bodyParser.json());

myServer.post('/exec', jsonParser, function(request, response) {
	console.log(request.body.command);
	console.log(request.body);
	if (!request.body) return request.sendStatus(400)
	systemcall(request.body.command, function(err, stdout){
		console.log("Stdout: "+stdout);
		console.log("Error: "+err);
		output = stdout
		response.send(output)

	})
});

myServer.listen(3000);

console.log("Baller status on port 3000")
