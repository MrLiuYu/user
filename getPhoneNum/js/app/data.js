define(["jquery","config"],function ($, config) {

    return{
        http:function (callback) {
            $.ajax({
                type:"get",
                url:config.util.url,
                data:{
                    phone:$("#phonenum").val(),
                    key:config.util.key
                },
                dataType:"jsonp",
                jsonp:"callback",
                jsonpCallback:"getInfo",
                success:function (data) {
                    callback(data);
                },
                error:function (errordata) {

                }
            })
        }
    }

});