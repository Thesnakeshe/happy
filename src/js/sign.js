jQuery(function($){
    var search = document.getElementById("search");
    var totop = document.getElementsByClassName("totop")[0];
    var sidebar = document.getElementsByClassName("sidebar")[0];
    window.onscroll = function(){
        if(window.scrollY > 400){
            // search.style.position="fixed";
            // search.style.top="-25px";
            totop.style.display="block";
            sidebar.style.display="block";
        }else{
            search.style.position="relative";
            search.style.top="0px";
            totop.style.display="none";
            sidebar.style.display="none";
        }
    }

//返回顶部
    var totop = document.querySelector(".totop");
        totop.onclick = function(){
            var timer = setInterval(function(){
                var top = window.scrollY;
                top -= 200;
                if (top <= 0){clearInterval(timer);
                }window.scrollTo(0, top);
        },20)
    }
//==========登录=============================
    $(".zh").on("blur",function(){
        $zhanghao = $(".zh").val();
        $.get("../api/sign.php?zhanghao="+$zhanghao,function(res){
            if(res == "该账号不存在"){
                $(".tishi1").html(res).css("color","red");
                $(".zh").val("");
                // console.log($(".tishi1"));
            }else{
                $(".tishi1").html("").css("color","red");
                // console.log(res);
            }
        })
    })
    $(".mm").on("blur",function(){
        $mimass = $(".mm").val();
        if($mimass.trim() == ""){
            $(".tishi2").html("请输入密码").css("color","red");
        }else{
            $(".tishi2").html("").css("font-size","red");
        }
    })
// ===============================================
        // console.log(Cookie);
    $(".signInt").on("click",function(){
        console.log( $mimass);
        if($mimass.trim() !== "" && $zhanghao.trim() !== ""){
            $.get("../api/sign.php?sianInt=true&zhanghao="+$zhanghao+"&mimass="+$mimass,function(res){
                console.log(res);
                if(res == "登录成功"){
                    // ====存cookie==========================
                    var d = new Date();
                    d.setDate(d.getDate()+30);
                    Cookie.setCookie("users",$zhanghao,d,"/");
                    // ====存cookie===========================
                    location.href = "../index.html";
                }else{
                    alert("您的密码输入错误");
                }
            })
        }

    })





})

