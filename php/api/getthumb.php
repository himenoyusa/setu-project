<?php
/**
 * 此 api 用于获取首页 gallary 内包含的缩略图信息、图片最终分数
 */
include_once('./function.php');

//页码
$pid = (int)$_GET['pictureid'];
//安全检测
if ($pid <= 0) {
    error(404);
    exit();
}

//查询 redis 缓存，若缓存不命中，则读取数据库并更新缓存
$thumb_info = redis('get', 'thumb'.$pid);
if ($thumb_info == null) {
    $db = database();
    $sql = 'SELECT picture_id, thumb_dir FROM `pictures` WHERE picture_id = :pid';
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':pid', $pid, PDO::PARAM_INT);
    $stmt->execute();

    //读取结果
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $thumb_info = $row;
    }
    //设置缓存
    redis('set', 'thumb'.$pid, $thumb_info);
}

//------------------------------------
//查询图片总分数
//$score = redis('get', 'score'.$pid);

responce([
    'thumb_info' => $thumb_info,
    'score' => $score
]);