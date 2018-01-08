const path = require('path');

function logger(req,res,next) {
	console.log('%s\t%s\t%s', new Date(),req.method, req.url);
	next();
}

module.exports = function(app,wools) {
	//set the logger 
	app.use(logger);

	app.get('/',function(req,res,next){
		res.render('woolTemplate', {wool_array: wools});
	})

	app.get('/add+(h[ae]bi[td])?',function(req,res){
		console.log(req.url);
		res.sendFile(path.join(appRoot + '/client/html/gemstone.html'));
	})

	app.get('/:map/:location', function(req,res,next) {
		if(!(req.params.map && req.params.location)) {
			next();
		} else {
			console.log('+++LOGGING %s/%s++++', req.params.map, req.params.location);
			res.sendFile(path.join(appRoot + '/client/' + req.params.map + '/' + req.params.location + '.html'));
		}
	})
}