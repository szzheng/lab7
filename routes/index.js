var projects = require('../projects.json');


/*
 * GET home page.
 */

exports.view = function(req, res){
  	res.render('index', projects);
  	
  	var random_num = Math.random();
  	console.log(random_num);

  	if (random_num > 0.5) {
  		projects["grid"] = false
  		console.log("Don't redirect");
  	} else {
  		res.redirect('/grid');
  		projects["grid"] = false;
  	}
};

exports.viewGrid = function(req, res) {
	res.render('index', projects);
	projects["grid"] = true;
}