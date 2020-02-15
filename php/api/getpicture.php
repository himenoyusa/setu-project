<?php
/**
 * 此 api 用于获取单张图片的所有信息
 */
include_once('./function.php');

$pid = (int)$_GET['pictureid'];
//安全检测
if ($pid <= 0) {
    error(404);
    exit();
}

//从 redis 中获取缓存，若无缓存则从数据库获取，并更新 redis
$pic_info = redis('get', 'pid'.$pid);
$tags = redis('get', 'tags'.$pid);
if ($pic_info == null) {
    $db = database();
    $sql = 'SELECT * FROM `pictures` WHERE picture_id = :pid';
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':pid', $pid, PDO::PARAM_INT);
    $stmt->execute();

    //读取图片信息
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $pic_info = $row;
    }

    //获取 tags
    $sql = 'SELECT * FROM `tags` WHERE picture_id = :pid';
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':pid', $pid, PDO::PARAM_INT);
    $stmt->execute();
    while ($row = $stmt->fetchAll(PDO::FETCH_ASSOC)) {
        $tags = $row;
    }

    //设置缓存
    redis('set', 'pid'.$pid, $pic_info);
    redis('set', 'tags'.$pid, $tags);
}

response([
    'pic_info' => $pic_info,
    'tags' => $tags ? $tags : []
]);