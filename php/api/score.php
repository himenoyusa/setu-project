<?php

//查询图片总分数
//$score = redis('get', 'score'.$pid);

responce([
    'thumb_info' => $thumb_info,
    'score' => $score
]);