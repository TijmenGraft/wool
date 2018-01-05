

function logger(req,res,next) {
	console.log('%s\t%s\t%s', new Date(),req.method, req.url);
	next();
}

module.exports = function(app) {
	//set the logger 
	app.use(logger);
	
}