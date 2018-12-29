<?php
    $zhanghao = isset($_GET["zhanghao"])?$_GET["zhanghao"]:null;
    $emails = isset($_GET["emails"])?$_GET["emails"]:null;
    $show = isset($_GET["show"])?$_GET["show"]:null;
    $mima2 = isset($_GET["mima2"])?$_GET["mima2"]:null;
    $ema = isset($_GET["ema"])?$_GET["ema"]:null;
    // 1.创建连接,测试是否连接成功
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'goodlist';
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        // var_dump($conn->connect_error);
    }
    //2.查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    //3.执行查询语句，得到查询结果集(对象)
    $res = $conn->query('select * from letianuser where zhanghao="'.$zhanghao.'"');
    $youxiang = $conn->query('select * from letianuser where emails="'.$emails.'"');
    if($ema){
        if($youxiang->num_rows > 0){
            echo "注册";
        }else{
            echo "未注册";
        }
    }else if($show){
        $ress = $conn->query('insert into letianuser (zhanghao,mima,emails) values ("'.$zhanghao.'","'.$mima2.'","'.$emails.'")');
        if($ress){
            echo "注册成功";
        }else{
            echo "插入失败";
        }

    }else{
        if($res->num_rows > 0){
            echo "该用户名已被注册";
        }else{
            echo "该用户名可用";
        }
    }
?>