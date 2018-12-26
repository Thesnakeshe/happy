
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
        console.log(shuju);
        shuju.data.map(function(item) {
            str += `
                    <div>
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



        function xuanran(shuju){
            console.log(shuju.data);
            var str="";
            shuju.data.map(function(item,index) {
            str += `
                    <div>
                      <img src="../${item.img}"/>
                      <p>${item.name} </p>
                      <p class="goodsxiao">${item.english}</p>
                      <p>${item.detail}</p>
                      <p><span class="goodsyan">$${item.dols}</span>&nbsp;<span class="goodsxiao">${item.cny}</span></p>
                    </div>`;
            }).join("");
            return str;
        }


})