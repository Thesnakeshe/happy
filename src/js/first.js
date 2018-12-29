jQuery(function($){
    var cookieName  = Cookie.getCookie("users") || [];
    if(cookieName != ""){
        $(".log").html("欢迎"+cookieName);

        $.getJSON("../api/car.php?show=true&zhanghao="+cookieName,function(res){
            console.log(res.length);
            if(res.length >=1){
                $(".carcs").html(res.length);
            }
        })
            // console.log(res);
        $(".log").on("click",function(){
            $(".tuichu1").css("display","block");
                setTimeout(function(){
                    $(".tuichu1").hide();
                },10000)
            $(".tuichu2").on("click",function(){
                location.href = "../html/sign.html";
            })
            $(".tuichu3").on("click",function(){
                Cookie.delCookie("users","/");
                $(".tuichu1").css("display","none");
                $(".log").html("登录");
            })

        })
    }else{
        $(".log").html("登录");
        $(".log").on("click",function(){
          location.href = "../html/sign.html";
        })
    }



})