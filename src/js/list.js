
document.addEventListener("DOMContentLoaded", function(){
    var search = document.getElementById("search");
    var totop = document.getElementsByClassName("totop")[0];
    var sidebar = document.getElementsByClassName("sidebar")[0];
    window.onscroll = function(){
        if(window.scrollY > 400){
            search.style.position="fixed";
            // search.style.left="50%";
            search.style.top="-25px";
            search.style.background="#fff";
            

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
    $.get("../api/list.php", function(res) {
        var shuju = JSON.parse(res);
        $(".mainBox").html(xuanran(shuju));
        $totalPage = Math.ceil(shuju.len/shuju.qty);
                console.log($totalPage);
        for(var i=1;i<=$totalPage;i++){
                var $dotted = $("<span/>");
                $dotted.html(i);
                $(".page").append($dotted);
                console.log($(".page"));
            if(i == shuju.currentPage){
                $dotted.addClass("active");
            }
        }
        //==================================================================
        //分页点击页码换业
        //2.点击page，获取当前页码，再次发起请求
        $(".page").on("click","span",function(){
            $(".page").html("");
            // if(e.target.tagName == "SPAN"){
            $currentPage = $(this).html();
            $.get("../api/list.php?currentPage="+$currentPage,function(res){
                var shuju = JSON.parse(res);
                $(".mainBox").html(xuanran(shuju));
                $totalPage = Math.ceil(shuju.len/shuju.qty);
                for(var i=1;i<=$totalPage;i++){
                        var $dotted = $("<span/>");
                        $dotted.html(i);
                        $(".page").append($dotted);
                        console.log($(".page"));
                    if(i == shuju.currentPage){
                        $dotted.addClass("active");
                    }
                }
            })
            // }
        })
        // page.onclick = function(e){
        //     if(e.target.tagName == "SPAN"){
        //         currentPage = e.target.innerHTML;
        //         xhr.open("get","../api/t07_football.php?qty="+qty+"&currentPage="+currentPage,true);
        //         xhr.send(null);
        // }


    //点击排序呀../api/list.php?show=true
    
        $(".dijia").on("click",function(){
            var str="";
            $.get("../api/list.php?show=true", function(res) {
                var shuju = JSON.parse(res);
        // console.log(shuju.data);
                // console.log(shuju.data);
                $(".mainBox").html(xuanran(shuju));
                //2.点击page，获取当前页码，再次发起请求
                $(".page").on("click","span",function(){
                    $(".page").text("");
                    // if(e.target.tagName == "SPAN"){
                    $currentPage = $(this).html();
                    $.get("../api/list.php?show=true&currentPage="+$currentPage,function(res){
                        var shuju = JSON.parse(res);
                        $(".mainBox").html(xuanran(shuju));
                        $totalPage = Math.ceil(shuju.len/shuju.qty);
                    })
                    // }
                })
            });
        })
        //gaojia高价
        $(".gaojia").on("click",function(){
            var str="";
            $.get("../api/list.php?show=false", function(res) {
                var shuju = JSON.parse(res);
                $(".mainBox").html(xuanran(shuju));
                //2.点击page，获取当前页码，再次发起请求
                $(".page").on("click","span",function(){
                    // $(".page")="";
                    $(".page").html("");
                    // if(e.target.tagName == "SPAN"){
                    $currentPage = $(this).html();
                    $.get("../api/list.php?show=false&currentPage="+$currentPage,function(res){
                        var shuju = JSON.parse(res);
                        $(".mainBox").html(xuanran(shuju));
                        $totalPage = Math.ceil(shuju.len/shuju.qty);
                    })
                    // }
                })
            });
        })
        function xuanran(shuju){
            console.log(shuju.data);
            var str="";
            shuju.data.map(function(item,index) {
              str += 
                        `<div class="mainBoxs" id="${item.id}">
                          <img src="../${item.img}" />
                          <div>
                            <p>${item.name}  <em> ${item.english}</em> </p>
                            <p>${item.detail}</p>
                            <p><em>$25</em>9.5折</p>
                            <p>$${item.dols} <em>${item.cny}</em></p>
                            <p><i></i><em>(${index*123})</em></p>
                          </div>
                        </div>`;
            }).join("");
            return str;
        }
    });
    //点击跳转详情页
    $(".mainBox").on("click",".mainBoxs",function(){
        location.href = "details.html?id="+this.id;
    })






})