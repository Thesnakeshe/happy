jQuery.fn.lmCarousell=function(obj){
    // console.log(this);
    var defaults = {
        imgs : [],
        width : 300,
        height : 180,
        type : "horizontal",
        seamless : true,
        idx : 0,
    };
    var opt = Object.assign({},defaults,obj);
        // 1.创建ul、li、img,将img追加到li，将li追加到ul，将ul追加到this(jq实例对象)
    var len = opt.imgs.length;
    var $ul;
    var $page;
    var $timer;
    var init = () => {
        $ul = $("<ul/>");
        for(var i=0;i<len;i++){
            $li = $("<li/>");
            $('<img src="'+opt.imgs[i]+'"/>').width(opt.width).height(opt.height).appendTo($li);
            $li.appendTo($ul);
        }
        $ul.appendTo(this);
        this.addClass('focus').width(opt.width).height(opt.height);
        if(opt.seamless == true && (opt.type == "horizontal" || opt.type=="vertical")){
            // $('<img src="'+opt.imgs[0]+'"/>').width(opt.width).height(opt.height).appendTo($li);
            // $li.appendTo($ul);
            $("<li/>").appendTo($ul).html(`<img src="${opt.imgs[0]}"  width="${opt.width}"  height="${opt.height}"/>`)
        }
        //判断类型，实现不同的css样式
        // 2.判断type类型，实现不同的css样式
        if(opt.type == "horizontal"){
            $ul.addClass("horizontal");
            $ul.width(opt.width*(len+2));
        }else if(opt.type == "fade"){
            $ul.addClass("fade");
            $ul.width(opt.width).height(opt.height);
            $ul.children().eq(opt.idx).css("opacity",1).siblings().css("opacity",0);
        }
        move();
        diandian();
    }
    var move = () =>{
        $timer = setInterval(function(){
            console.log(opt.idx);
            opt.idx++;
            showPic();
        }, 2000)
    }
    var showPic = () => {
        //无缝滚动判断
        if(opt.seamless == true && (opt.type == "vertical" || opt.type == "horizontal")){
            if(opt.idx == len+1){
                opt.type == "vertical"? $ul.css("top",0) : $ul.css("left",0);
                opt.idx = 1;
            }else if(opt.idx >=len+1){
                opt.idx = 0;
            }else if(opt.idx==-1){
                opt.idx=opt.imgs.length-1; 
                $ul.animate({left:-opt.idx*opt.width},33);
                // ulbox.style.left=-firstImg.offsetWidth *(len-1) +"px"; //len-1=3复制的那个节点 插入到最后  因为替换是一瞬间的可以造成向左滑动到倒数第一张的的假象 -1代表
                //这个len-2意思很多 len为length长度为4（复制一张） 而且-2是因为-1是length-1为下标，另外的-1是left值为0就是第一张
            }
        }
        if(opt.type == "vertical"){
            $ul.animate({top:-opt.idx*opt.height},500);
        }else if(opt.type == "horizontal"){
            $ul.animate({left:-opt.idx*opt.width},500);
        }else if(opt.type == "fade"){
            $ul.children().eq(opt.idx).animate({opacity:1},500).siblings().animate({opacity:0},500);
        }
            $page.children().eq(opt.idx-len).addClass("active").siblings().removeClass('active');
    }
    //添加标签号
    var diandian = ()=>{
        $page = $("<div/>");
        $page.addClass("page");
        for(let j=0;j<len;j++){
            opt.idx++;
            var $span = $('<span/>');
            // $span.html(opt.idx);
            $span.appendTo($page);
        } 
        $page.children().eq(0).addClass("active");
        $right = $("<p/>");
        $right.addClass("right").html("<");
        $left = $("<p/>");
        $left.addClass("left").html(">");
        // $left.addClass("left");
        $right.appendTo(this);
        $left.appendTo(this);

        $page.appendTo(this.parent());
    }
    //添加点击事件
    init();
    $page.on("click",function(e){
        if(e.target.tagName == "SPAN" || e.target.tagName == "FONT"){
            opt.idx = e.target.innerText-1;
            showPic();
        }
    })
    //划上清除定时器
    this.on("mouseover",function(){
        clearInterval($timer);
        $(this).find(".left").css("display","block");
        $(this).find(".right").css("display","block");
    })
    // //移出开启定时器
    this.on("mouseout",function(){
        $(this).find(".left").css("display","none");
        $(this).find(".right").css("display","none");
        move();
    })
    //点击左右两个键切换图片呀
    this.on("click",".left",function(){
        showPic();
        opt.idx ++;
    })
    this.on("click",".right",function(){
        showPic();
        opt.idx --;
    })
}