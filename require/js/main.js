requirejs.config({
	baseUrl:"js",
	paths:{
		app:"js/js",
		jquery:"lib/jQuery",
		data:"js/data"
	}
});

require(["js","jquery","data"],function(app,$,data){
	app.setDiv();
});

/**
 * Created by iwen on 2017/6/13.
 */
