<?php
/**
 * 此 api 用于获取首页 gallary 内包含的缩略图信息
 */
include_once('./function.php');

//设置每页显示图片数量
$page_count = 9;

//获取页码
$page = (int)$_GET['page'];
//安全检测
if ($page <= 0) {
    error(404);
    exit();
} else {
    $pid = ($page - 1) * $page_count;
}

//查询 redis 缓存，若缓存不命中，则读取数据库并更新缓存
$thumbs = redis('get', 'page'.$page);
if ($thumbs == null) {
    $db = database();
    $sql = 'SELECT picture_id, thumb_dir, total_score FROM `pictures` WHERE picture_id > :pid LIMIT '.$page_count;
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':pid', $pid, PDO::PARAM_INT);
    $stmt->execute();

    //读取结果
    while ($row = $stmt->fetchAll(PDO::FETCH_ASSOC)) {
        $thumbs = $row;
    }
    //设置缓存
    redis('set', 'page'.$page, $thumbs);
}

response([
    'thumbs' => $thumbs
]);