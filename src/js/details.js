
document.addEventListener("DOMContentLoaded", function(){
    var search = document.getElementById("search");
    var totop = document.getElementsByClassName("totop")[0];
    var sidebar = document.getElementsByClassName("sidebar")[0];
    window.onscroll = function(){
        if(window.scrollY > 400){
            search.style.position="fixed";
            search.style.top="-25px";
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
})


jQuery(function($) {

    //连接数据库
    var str = "";
    $.get("../api/details.php", function(res) {
        var shuju = JSON.parse(res);
        shuju.data.map(function(item) {
            str += `
                    <div id="${item.id}">
                      <img src="../${item.img}"/>
                      <p>${item.name} </p>
                      <p class="goodsxiao">${item.english}</p>
                      <p>${item.detail}</p>
                      <p><span class="goodsyan">$${item.dols}</span>&nbsp;<span class="goodsxiao">${item.cny}</span></p>
                    </div>`;
        }).join("");
        $(".kankan").html(str);
        $totalPage = Math.ceil(shuju.len/shuju.qty);
        $(".kk3").html($totalPage);
        //2.点击page，获取当前页码，再次发起请求
        $(".kk1").on("click",function(){
            // if(e.target.tagName == "SPAN"){
            $currentPage = $(".kk2").html();
            $currentPage--;
                console.log($currentPage);
            if($currentPage == 0){
                $currentPage = 8;
            }
            $(".kk2").html($currentPage);
            $.get("../api/details.php?currentPage="+$currentPage,function(res){
                var shuju = JSON.parse(res);
                $(".kankan").html(xuanran(shuju));
                $totalPage = Math.ceil(shuju.len/shuju.qty);

            })
            // }
        })
        $(".kk4").on("click",function(){
            // if(e.target.tagName == "SPAN"){
            $currentPage = $(".kk2").html();
            $currentPage++;
                console.log($currentPage);
            if($currentPage == 9){
                $currentPage = 1;
            }
            $(".kk2").html($currentPage);
            $.get("../api/details.php?currentPage="+$currentPage,function(res){
                var shuju = JSON.parse(res);
                $(".kankan").html(xuanran(shuju));
                $totalPage = Math.ceil(shuju.len/shuju.qty);

            })
            // }
        })
    });

    //渲染代码

    function xuanran(shuju){
        // console.log(shuju.data);
        var str="";
        shuju.data.map(function(item,index) {
        str += `
                <div id="${item.id}">
                  <img src="../${item.img}"/>
                  <p>${item.name} </p>
                  <p class="goodsxiao">${item.english}</p>
                  <p>${item.detail}</p>
                  <p><span class="goodsyan">$${item.dols}</span>&nbsp;<span class="goodsxiao">${item.cny}</span></p>
                </div>`;
        }).join("");
        return str;
    }

//===========将传过来的id剪切掉==========================================================================
    //先接收一下产品总页面传过来的路径然后再把他给剪切了
    var lujing = decodeURI(location.search.slice(1));
    var shu = {};
    var jianqie = lujing.split("&");
    jianqie.forEach(function(item){
        var arrXiang = item.split("=");
        shu[arrXiang[0]] = arrXiang[1];
    })
        console.log(shu.id);
    //开启异步连接后端
    $.getJSON("../api/details.php?show=true&id="+shu.id,function(res){
        // console.log(res[0]);
        $(".goodsName2").html(res[0].name);
        $(".goodsEnglish").html(res[0].english);
        $(".goodsDetails").html(res[0].detail);
        $(".gp1").html('<img src="../'+res[0].img+'"/>');
        $(".fangda").html('<img class="fangda2" src="../'+res[0].img+'"/>');
        $(".gprbox1_yuan").html("$"+res[0].dols);
        $(".gprbox1_yuan2").html("("+res[0].cny+")");
        $(".gprbox1_xian").html("$"+(res[0].dols*0.8).toFixed(2));
        $(".gprbox1_xian2").html("(约"+(res[0].dols*0.8*6.8).toFixed(2)+"元)");
        //点击加减商品的数量
        $(".jian").on("click",function(){
            $shu = $(".shuliang").val();
            $shu--;
            if($shu <= 0){
                $shu = 0;
            }
            $(".shuliang").val($shu);
        })
        $(".jia").on("click",function(){
            $shu = $(".shuliang").val();
            $shu++;
            if($shu >= 999){
                $shu = 999;
            }
            $(".shuliang").val($shu);
        })

                
        //如果有登录就显示加入成功，未成功就显示请登录
        $(".jiacar").on("click",function(){
            var cookieName  = Cookie.getCookie("users") || [];
            if(cookieName != ""){
                $cookie = cookieName;
                $imagess = res[0].img;
                $names = res[0].name;
                $english = res[0].english;
                $detail = res[0].detail;
                $dols = res[0].dols;
                $cny = res[0].cny;
                $qty = $(".shuliang").val();
                $suoyin =res[0].id;
                // console.log($qty);
                $.get("../api/usership.php?yes=true&cookie="+$cookie+"&imagess="+$imagess+"&names="+$names+"&english="+$english+"&detail="+$detail+"&dols="+$dols+"&cny="+$cny+"&qty="+$qty+"&suoyin="+$suoyin,function(res){
                    console.log(res);
                })
                //获取当前页面的值准备加入进去
                //
                // console.log(product_l);
                var product_l = document.querySelector(".gp1");
                var fly = product_l.children[0].cloneNode(true);
                fly.style.display = "none";
                fly.classList.add("fly");
                product_l.appendChild(fly);
                //飞入购物车动画
                fly.style.display = "block";
                // console.log(fly);
                animation(fly,{width:0,height:0,left:900,top:-500},30);
                setTimeout(function(){
                    product_l.removeChild(fly);
                }, 2000);
            }else{
                alert("请登录");
                location.href = "sign.html";
            }
        })
        //点击立即购买进入购物车
        $(".buycar").on("click",function(){
            console.log(shu.id);
            location.href = "car.html";
        })
    })
    
    //放大镜效果；
    $(".gp1").on("mouseover","img",function(){
        console.log(5555);
        $(".gp1").css("opacity",0);
    })
    $(".gp1").on("mouseout","img",function(){
        $(".gp1").css("opacity",1);
    })
    $(".gp1").on("mousemove","img",function(e){
        // var tool = document.querySelector(".gp1");
        var bigImg = document.querySelector(".fangda2");
        // var _e = window.event||e;//事件对象
        var x = e.clientX-this.offsetLeft;//事件对象在小盒子内的横向偏移量
        var y = e.clientY-this.offsetTop;//竖向偏移量
        bigImg.style.left = (-x*2)+310 + "px";//放大图片移动方向相反，偏移距离加倍
        bigImg.style.top = (-y*2)+310 + "px";
        console.log(bigImg);


    })




})