<?php

//查询图片总分数
//$score = redis('get', 'score'.$pid);

response([
    'thumb_info' => $thumb_info,
    'score' => $score
]);