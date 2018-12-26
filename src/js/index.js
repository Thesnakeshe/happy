    jQuery(function($) {
        //连接数据库
        var str = "";
        var str2 = "";
        $.get("../api/index.php", function(res) {
            var shuju = JSON.parse(res);
            shuju.map(function(item) {
                str += `
                        <div>
                          <img src="${item.img}"/>
                          <p>${item.name} </p>
                          <p class="goodsxiao">${item.english}</p>
                          <p>${item.detail}</p>
                          <p><span class="goodsyan">$${item.dols}</span>&nbsp;<span class="goodsxiao">${item.cny}</span></p>
                        </div>`;
            }).join("");
            $(".littleGood").html(str);
            shuju.map(function(item,index) {
                str2 += `
                    <div class="hfshop">
                      <div class="hf_l">
                        <span>${index+1}</span>
                        <img src="${item.img}" />
                      </div>
                      <div class="hf_r">
                      <p>${item.name} </p>
                      <p>${item.english}</p>
                      <p>${item.detail}</p>
                      <p><span class="hf_rc">$${item.dols}</span>&nbsp;<span>${item.cny}</span></p>
                      </div></div>`;
            }).join("");
            $(".hufuList_r").html(str2);
            $(".special").html(str);
        });
    })

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
