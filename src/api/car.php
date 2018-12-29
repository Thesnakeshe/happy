<?php
    $zhanghao = isset($_GET["zhanghao"])?$_GET["zhanghao"]:null;
    $show = isset($_GET["show"])?$_GET["show"]:null;
    $shanhang = isset($_GET["shanhang"])?$_GET["shanhang"]:null;
    $idname = isset($_GET["idname"])?$_GET["idname"]:null;
    $shujia1 = isset($_GET["shujia1"])?$_GET["shujia1"]:null;
    $shujian1 = isset($_GET["shujian1"])?$_GET["shujian1"]:null;
    $ss1 = isset($_GET["ss1"])?$_GET["ss1"]:null;
    $ss2 = isset($_GET["ss2"])?$_GET["ss2"]:null;
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
    if($show){
        $res = $conn->query('select * from usership where zhanghao="'.$zhanghao.'"');
        $contents = $res->fetch_all(MYSQLI_ASSOC);
        // var_dump($contents);
        $res->close();
        $conn->close();
        echo json_encode($contents,JSON_UNESCAPED_UNICODE);
    }else if($shanhang){
        $res = $conn->query('delete from usership where id="'.$idname.'"');
        $contents = $res->fetch_all(MYSQLI_ASSOC);
        // var_dump($contents);
        $res->close();
        $conn->close();
        echo json_encode($contents,JSON_UNESCAPED_UNICODE);
    }else if($shujia1){
        $res = $conn->query('select * from usership where id="'.$ss1.'"');
        $contents = $res->fetch_all(MYSQLI_ASSOC);
        $ccc = $contents[0]["qty"] + 1;
        $res = $conn->query('update usership set qty="'.$ccc.'" where id="'.$ss1.'"');
        echo $ccc;
    }else if($shujian1){
        $res = $conn->query('select * from usership where id="'.$ss2.'"');
        $contents = $res->fetch_all(MYSQLI_ASSOC);
        $ccc = $contents[0]["qty"] - 1;
        $res = $conn->query('update usership set qty="'.$ccc.'" where id="'.$ss2.'"');
        echo $ccc;
    }


?>