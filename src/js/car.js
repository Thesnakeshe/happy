
document.addEventListener("DOMContentLoaded", function(){
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
})
jQuery(function($) {
    $cookieName  = Cookie.getCookie("users") || [];
    if($cookieName != ""){
        $.getJSON("../api/car.php?show=true&zhanghao="+$cookieName,function(res){
            // console.log(res);
            $(".cartsts").html(xuanran(res));
            //点击加数量
            $(".cartsts").on("click",".cartst .shujia1",function(){
                var $ss1 = $(this).parent().parent().parent().attr("id");
                     
                $.get("../api/car.php?shujia1=true&ss1="+$ss1,(res) => {
                    $(this).prev().val(res);
                })
            })
            //点击减数量
            $(".shujian1").on("click",function(){
                var $ss2 = $(this).parent().parent().parent().attr("id");

                $.get("../api/car.php?shujian1=true&ss2="+$ss2,(res) => {
                    $(this).prev().prev().val(res);
                })
            })


        //xuanran
        })
    }

    //全选反选
    $('#all').on('click', function() {
            $('.cartst input').prop('checked', this.checked);
    });

    //全选补充
    $('.cartsts').on('click', '.cartst', function() {
        var $trs = $(".cartst");
        var $xuanze = $(".cartsts :checked").length;
            if($xuanze == $trs.length){
                $('#all').prop("checked",true);
            }else{
                $('#all').prop("checked",false);
            }
    });
    //删除单行
    $('.cartsts').on('click', '.shanchu1', function() {
        var mes = confirm('您确定要删除该商品吗？');
        console.log(mes);
        if(mes) {
            $(this).parent().parent().remove();
            $dis = $(this).parent().parent().attr("id")
            $.get("../api/car.php?shanhang=true&idname="+$dis,function(res){
                console.log(res);
            $(".cartsts").html(xuanran(res));

            })
        }
    });



















    //渲染代码
        function xuanran(res){
            var str ="";
            res.map(function(item){
                str +=   `
                <div class="cartst" id="${item.id}">
                    <div> <input type="checkbox" /> </div>
                    <div>
                        <p> <img src="../${item.img}" /> </p>
                        <p>
                            <span>${item.name}&nbsp;<em>${item.english}</em></span>
                            <span>${item.detail}</span>
                            <span><em>[HN8596]</em></span>
                            <span>不可使用购物车优惠券</span>
                            <span><em>100 Bhabala </em></span>
                            <span>更改选项</span>
                        </p>
                    </div>
                    <div>
                        <span>$${item.dols*1.2.toFixed(2)}</span>
                        <span><em>$${item.dols}</em></span>
                        <span>9.5折<i></i></span>
                    </div>
                    <div>
                        <p><input class="shujia11" type="text" value="${item.qty}"/><span class="shujia1"></span><span class="shujian1"></span></p>
                    </div>
                    <div>
                        <p>$${item.dols}</p>
                        <p>(${item.cny})</p>
                    </div>
                    <div>
                        <p>立即购买</p>
                        <p>保留购物车</p>
                        <p class="shanchu1">删除</p>
                    </div>
                </div>`;
            }).join("");
            return str;
        }
    


    
})

