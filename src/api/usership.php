<?php

    $yes = isset($_GET["yes"])?$_GET["yes"]:null;
    $cookie = isset($_GET["cookie"])?$_GET["cookie"]:null;
    $imagess = isset($_GET["imagess"])?$_GET["imagess"]:null;
    $names = isset($_GET["names"])?$_GET["names"]:null;
    $english = isset($_GET["english"])?$_GET["english"]:null;
    $detail = isset($_GET["detail"])?$_GET["detail"]:null;
    $dols = isset($_GET["dols"])?$_GET["dols"]:null;
    $cny = isset($_GET["cny"])?$_GET["cny"]:null;
    $qty = isset($_GET["qty"])?$_GET["qty"]:null;
    $suoyin = isset($_GET["suoyin"])?$_GET["suoyin"]:null;
// 1.创建连接,测试是否连接成功
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'goodlist';
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        // var_dump($conn->connect_error);
    }
    // echo "成功";
    //2.查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    //3.执行查询语句，得到查询结果集(对象)
    if($yes){
        $res = $conn->query('select * from usership where zhanghao="'.$cookie.'"and suoyin="'.$suoyin.'"');
        if($res->num_rows > 0){
            $contents = $res->fetch_all(MYSQLI_ASSOC);
            $ccc = $contents[0]["qty"] + $qty;
            $res = $conn->query('
                    update usership set qty="'.$ccc.'" where suoyin="'.$suoyin.'" and zhanghao="'.$cookie.'"');
        }else{
            $ress = $conn->query('insert into usership (zhanghao,img,name,english,detail,dols,cny,qty,suoyin) values ("'.$cookie.'","'.$imagess.'","'.$names.'","'.$english.'","'.$detail.'","'.$dols.'","'.$cny.'","'.$qty.'","'.$suoyin.'")');
            echo "成功";
        }
    }else{
        echo "失败";
    }
?>