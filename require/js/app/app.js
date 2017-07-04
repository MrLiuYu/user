define(["jquery","./data"],function($,data){
	var num = 20;
	function setDiv(){
		$("#rq").html(data.divContent);
		console.log("appNum:"+num);
        console.log("dataNum:"+data.num);
	}
	return{
		setDiv:setDiv
	}
})