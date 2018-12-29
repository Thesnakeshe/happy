<?php
    $zhanghao = isset($_GET["zhanghao"])?$_GET["zhanghao"]:null;
    $sianInt = isset($_GET["sianInt"])?$_GET["sianInt"]:null;
    $mimass = isset($_GET["mimass"])?$_GET["mimass"]:null;
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
    // $res[0]["mima"]
    if($sianInt){
            $contents = $res->fetch_all(MYSQLI_ASSOC);
            $res->close();
            $conn->close();
            if($contents[0]["mima"] == $mimass){

    // var_dump($contents[0]["mima"]);
                echo "登录成功";
            }else{
                echo "密码错误";
            }
    }else{
        if($res->num_rows > 0){
            $content = $res->fetch_all(MYSQLI_ASSOC);
            $res->close();
            $conn->close();
            echo json_encode($content,JSON_UNESCAPED_UNICODE);
        }else{
            echo "该账号不存在";
        }
    }



?>