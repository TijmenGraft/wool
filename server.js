const express = require('express');
const ejs = require('ejs');

var app = express();

require('./extra/router.js')(app);

//set setting file handler
app.use(express.static(__dirname + '/client'));
//set the view engine and the wool template
app.set('views', __dirname + 'template');
app.set('view engine', 'ejs');

//create server
var server = app.listen(8080,function() {
	var host = server.address().address;
	var port = server.address().port
	console.log("Listening on %s:%s", host, port);
})
