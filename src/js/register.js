
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



    //表单验证
        var nameXing = document.getElementById('nameXing');
        var nameMing = document.getElementById('nameMing');
        var zhangh1 = document.getElementById('zhangh1');
        nameXing.onblur=function(){
            var _name = nameXing.value;
            // !new RegExp("^[A-Z]+$","i"
            if(!/^[A-Z]+$/.test(_name)){
                // e.preventDefault();
                // alert("你的名字输入错误");
                console.log(55);
                nameXing.value="";
                return false;//阻止默认行为
            }else{
                console.log(111);
            }
        }
        nameMing.onblur=function(){
            var _name = nameMing.value;
            if(!/^[A-Z]+$/.test(_name)){
                // e.preventDefault();
                alert("你的名字输入错误");
                nameMing.value="";
                return false;//阻止默认行为
            }else{

            }
        }
        //验证账户名
        var zhanghT =document.querySelector(".zhanghT")
        zhangh1.onblur=function(){

            var _name = zhangh1.value;
            if(!/[A-Za-z0-9][\w\-]{5,19}$/.test(_name)){
                // e.preventDefault();
                zhanghT.innerHTML="该账户名不可用";
                zhanghT.style.color = "red";
                return false;//阻止默认行为
            }else{
                zhanghT.innerHTML="该账户名可用";
                zhanghT.style.color = "#9893D5";
            }

        }
        //验证密码
        var mima1 = document.getElementById('mima1');
        var mima1T =document.querySelector(".mima1T")
        mima1.onblur=function(){
            var _name = mima1.value;
            if(!/[a-zA-Z0-9][\w\-]{9,14}$/.test(_name)){
                // e.preventDefault();
                mima1.value="";
                // e.preventDefault();
                mima1T.innerHTML="密码不可用";
                mima1T.style.color = "red";
                return false;//阻止默认行为
            }else{
                mima1T.innerHTML="密码可用";
                mima1T.style.color = "#9893D5";
            }
        }
        //再次验证密码
        var mima2 = document.getElementById('mima2');
        var mima2T =document.querySelector(".mima2T")
        mima2.onblur=function(){
            var _name = mima2.value;
            if(_name == mima1.value && _name.trim() != ""){
                // e.preventDefault();
                // e.preventDefault();
                mima2T.innerHTML="两次密码输入正确";
                mima2T.style.color = "#9893D5";
                return false;//阻止默认行为
            }else{
                mima2T.innerHTML="两次输入密码不一致";
                mima2.value="";
                mima2T.style.color = "red";
            }
        }
        //验证邮箱1
        //
        var emails = document.getElementById('emails');
        var emailsT =document.querySelector(".emailsT")
        emails.onblur=function(){
            var _name = emails.value;
            if(!/^[a-zA-Z][\w\-\.]*@[\da-z\-]{1,63}(\.[a-z]{2,3})+$/.test(_name)){
                // e.preventDefault();
                emails.value="";
                // e.preventDefault();
                emailsT.innerHTML="请输入正确的邮箱";
                emailsT.style.color = "red";
                return false;//阻止默认行为
            }else{
                $.get("../api/register.php?ema=true&emails="+$("#emails").val(),function(res){
                    if(res == "注册"){
                        $(".emailsT").html("该邮箱已被注册").css("color","red");
                    }else{
                        $(".emailsT").html("该邮箱可用").css("color","#666");
                    }
                })
            }
        }
        //验证电话号码1
        //
        var haoma = document.getElementById('haoma');
        var haomaT =document.querySelector(".haomaT")
        haoma.onblur=function(){
            var _name = haoma.value;
            if(!/^1[3-8]\d{9}$/.test(_name)){
                // e.preventDefault();
                haoma.value="";
                // e.preventDefault();
                haomaT.innerHTML="请输入正确的电话号码";
                haomaT.style.color = "red";
                return false;//阻止默认行为
            }else{
                haomaT.innerHTML="该电话号码可用";
                haomaT.style.color = "#9893D5";
            }
        }
        
        
// ========================================================
        //查看该账号是否被注册
        $(".sures").on("click",function(){
            $zhanghao = $("#zhangh1").val();
            $.get("../api/register.php?zhanghao="+$zhanghao,function(res){
                console.log($(".zhanghT").html());
                if(res == "该用户名可用" && $(".zhanghT").html() == "该账户名可用"){
                    $(".zhanghT").html("该用户名可用").css("color","#666");
                }else if($(".zhanghT").html() == "该账户名可用"){
                    $(".zhanghT").html("该用户名可用").css("color","#666");
                }else{
                    $(".zhanghT").html("请重新输入");       
                }
            })
        })
        //开始注册啦啦啦啦啦
        $(".inzu").on("click",function(){
            $zhanghao = $("#zhangh1").val();
                    console.log($zhanghao);
            $mima2 = $("#mima2").val();
            $emails = $("#emails").val();
            if($(".zhanghT").html() == "该账户名可用" && $(".mima2T").html() == "两次密码输入正确" && $(".emailsT").html() == "该邮箱可用"){
                $.get("../api/register.php?show=true&zhanghao="+$zhanghao+"&mima2="+$mima2+"&emails="+$emails,function(res){
                    if(res == "注册成功"){
                        location.href = "sign.html";
                    }else{
                        alert("注册失败请重试");

                    }
                })
                
            }else{
                alert("请仔细核查您的注册信息");
            }


        })














})