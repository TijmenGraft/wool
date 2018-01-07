

function logger(req,res,next) {
	console.log('%s\t%s\t%s', new Date(),req.method, req.url);
	next();
}

module.exports = function(app,wools) {
	//set the logger 
	app.use(logger);

	app.get('/:location', function(req,res,next){
		if(req.params.location === "getWool") {
			var data = JSON.stringify(wools);
			res.render('woolTemplate', { wool_array: wools });
		}
	})
}