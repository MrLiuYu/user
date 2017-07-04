define(["jquery","view","data"],function ($, view, data) {

	$(".btn").on("click",function (e) {
		data.http(function (data) {
            view.adapter(data);
        })
		
	})



})