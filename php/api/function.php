<?php

/**
 * 返回 json 格式的 http response
 * @param array array 数组形式的数据
 */
function responce($array) {
    header('Content-Type:application/json; charset=UTF-8');
    echo json_encode($array);
}

/**
 * 返回 json 格式的错误信息
 * @param err_code int
 */
function error($err_code) {
    switch ($err_code) {
        case 404:
            $err_info = '404';
            break;
        case 403:
            $err_info = '404';
            break;
        default:
            $err_info = '404';
    }
    responce([
        'ERR_CODE' => $err_code,
        'ERR_INFO' => $err_info
    ]);
}

/**
 * 封装数据库 PDO 连接
 */
function database(){
    include_once('./../../dbconfig.php');
    $dsn = 'mysql:host=localhost;dbname=setu;';
    try {
        $db = new PDO($dsn, $username, $passwd);
        return $db;
    } catch (PDOException $e) {
        return false;
    }
}

/**
 * 封装 redis 操作
 * @param func string
 * @param key sting
 * @param value object
 */
function redis($func, $key, $value = null) {
    $redis = new Redis();
    $redis->connect('127.0.0.1',6379);
    switch ($func) {
        case 'get':
            return unserialize($redis->get($key));
            break;
        case 'set':
            $redis->set($key, serialize($value));
            return true;
            break;
    }
}