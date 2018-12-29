if(!jQuery.fn.mjCarouse){
    jQuery.fn.mjCarouse = function(obj){
        var defaults = {
            imgs: [],
            bgColor: [],
            width: 1000,
            height: 750,
            idx: 0,
            type: "horizontal",
            seamless: true,
        }
        var opt = Object.assign({},defaults,obj);
        var $ul;
        var $page;
        var timer;
        var init = ()=>{
            $ul = $("<ul/>");
            for(var i=0;i<opt.imgs.length;i++){
                $("<li/>").html(`<img src="${opt.imgs[i]}" width="${opt.width}" height="${opt.height}"/>`).appendTo($ul);
            }
            $(this).addClass("focus").append($ul).css({width:opt.width,height:opt.height});
            if(opt.seamless==true&&(opt.type=="horizontal"||opt.type=="vertical")){
                $("<li/>").html(`<img src="${opt.imgs[0]}" width="${opt.width}" height="${opt.height}"/>`).appendTo($ul);
            }
            if(opt.type=="fade"){
                $ul.addClass('fade').css({width:opt.width,height:opt.height});
                $ul.children().css({opacity:0});
                $ul.children().eq(0).css({opacity:1});
            }else if(opt.type=="horizontal"){
                $ul.addClass('horizontal').width(opt.width*(opt.imgs.length+1)).height(opt.height);
            }
            if(opt.bgColor.length!=0){
                $(this).closest("#banner").css({background:opt.bgColor[0]});
            }
            
                     
        }
        // $page.onclick = function(e){
        //         if(e.target.tagName=="SPAN"){
        //             idx = e.target.innerHTML-1;
        //             showpic();
        //         }
        //    }
        var autoplay = ()=>{
            timer = setInterval(()=>{
                    opt.idx++;
                    showpic();
                },2700)
        }
        var showpic = ()=>{
                if(opt.seamless==true&&(opt.type=="horizontal"||opt.type=="vertical")){
                    if(opt.idx>=opt.imgs.length+1){
                        opt.type=="horizontal"?$ul.css({left:0}):$ul.css({top:0});
                        opt.idx=1;
                    }
                }else{
                    if(opt.idx>=opt.imgs.length){
                        opt.idx=0;
                    }
                }
                active();
                // console.log($ul);
                if(opt.type=="horizontal"){
                    $ul.stop().animate({left:-opt.idx*opt.width},300);
                }else if(opt.type=="vertical"){
                    $ul.stop().animate({top:-opt.idx*opt.height},300);
                }else if(opt.type=="fade"){
                    $ul.children().stop().animate({opacity:0},400);
                    $ul.children().eq(opt.idx).stop().animate({opacity:1},400);
                }
                if(opt.bgColor.length!=0){
                    $(this).closest("#banner").css({background:opt.bgColor[opt.idx]});
                }
        }
        var createPage = ()=>{
            $page = $("<div/>").addClass('page').appendTo(this);
            for(let i=0;i<opt.imgs.length;i++){
                $("<span/>").html(i+1).appendTo($page).on("mouseover",function(){
                        opt.idx = i;
                        showpic();
                });
            }
            $page.children().eq(0).addClass('active');
        }
        var active = ()=>{
            if(opt.seamless==true&&(opt.type=="horizontal"||opt.type=="vertical")){
                if(opt.idx>=opt.imgs.length){
                    $page.children().removeClass('active');
                    $page.children().eq(0).addClass('active');
                }else{
                    $page.children().removeClass('active');
                    $page.children().eq(opt.idx).addClass('active');
                }
            }else{
                $page.children().removeClass('active');
                $page.children().eq(opt.idx).addClass('active');
            }
        }
        var createSwitch = ()=>{
            var $left = $("<span/>").addClass('overleft').append($("<i/>").html("<")).hide().appendTo($(this)).on("click",function(){
                    opt.idx--;
                    if(opt.idx==-1){
                        if(opt.type=="horizontal"){
                            $ul.css({left:-opt.width*(opt.imgs.length)});
                        }
                        opt.idx = opt.imgs.length-1;
                    }
                    showpic();
            }).on("mouseover",function(){
                $(this).css({backgroundColor:"rgba(255,255,255,.8)"})
            }).on("mouseout",function(){
                $(this).css({backgroundColor:"rgba(255,255,255,.4)"})
            });
            var $right = $("<span/>").append($("<i/>").html(">")).addClass('overright').hide().appendTo($(this)).on("click",function(){
                    opt.idx++;
                    showpic();
            }).on("mouseover",function(){
                $(this).css({backgroundColor:"rgba(255,255,255,.8)"})
            }).on("mouseout",function(){
                $(this).css({backgroundColor:"rgba(255,255,255,.4)"})
            });
            $(this).on("mouseover",function(){
                $left.show();
                $right.show();
            }).on("mouseout",function(){
                $left.hide();
                $right.hide();
            })
        }
        init();
        createPage();
        autoplay();
        if(opt.type=="horizontal"||opt.type=="fade"){
            createSwitch();
        }
        $(this).on("mouseover",function(){
            clearInterval(timer);
        }).on("mouseout",function(){
            autoplay();
        })
    }
}
 // $("#box").mjCarouse({imgs:["../images/s1.jpg","../images/s2.jpg","../images/s3.jpg"],width:800,height:600});
 // <div id="box"></div>