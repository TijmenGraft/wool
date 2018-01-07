const express = require('express');
const ejs = require('ejs');
const wool = require('./extra/classes/woolClass.js');
const needle = require('./extra/classes/needleClass.js');

var app = express();

function test() {
	return new wool('black',3,'praxis',5,8);
}


//set setting file handler
app.use(express.static(__dirname + '/client'));
//set the view engine and the wool template
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');


var wools = [];
var needles = [];
wools.push(new wool('red',420,'hema',5,3));
wools.push(new wool('blue',350,'hema',5,3));

needles.push(new needle('hema',4));

require('./extra/router.js')(app,wools);

wools.push(new wool('green',500,'bijenkorf',6,5));
wools.push(test());

//create server
var server = app.listen(8080,function() {
	var host = server.address().address;
	var port = server.address().port
	console.log("Listening on %s:%s", host, port);
})
