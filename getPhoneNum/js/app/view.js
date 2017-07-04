define(["jquery"],function ($) {

    return{
        adapter:function (data) {
            if(data){
                $(".province").html(data.result.province);
                if(data.result.city){
                    $(".city").html(data.result.city);
                }else{
                    $(".city").html("不告诉你");
                }
                $(".areacode").html(data.result.areacode);
                $(".zip").html(data.result.zip);
                $(".company").html(data.result.company);
                $(".card").html(data.result.card);
            }
        }
    }

});