requirejs.config({
	baseUrl:"js",
	paths:{
		"jquery":"lib/jQuery",
		"app":"js/js",
		"config":"js/config",
		"view":"js/view",
        "data":"js/data"
	}
});

requirejs(["jquery","app","config","view","data"],function ($,app,config,view,data) {
	
});