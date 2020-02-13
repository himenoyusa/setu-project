DROP DATABASE IF EXISTS `setu` ;
CREATE DATABASE `setu`;
USE `setu`;

CREATE TABLE `users` (
    u_id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    u_account VARCHAR(50) NOT NULL,
    u_password VARCHAR(612) NOT NULL,
    u_level ENUM('guest', 'admin') NOT NULL DEFAULT 'guest',
    u_avatar VARCHAR(200) NOT NULL,
    create_time INT(10) NOT NULL,
    edit_time INT(10) NOT NULL
);

CREATE TABLE `pictures` (
    picture_id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    picture_dir VARCHAR(200) NOT NULL,
    thumb_dir VARCHAR(200) NOT NULL,
    total_score TINYINT UNSIGNED DEFAULT 0,
    create_by INT UNSIGNED NOT NULL,
    create_time INT(10) NOT NULL,
    edit_by INT UNSIGNED NOT NULL,
    edit_time INT(10) NOT NULL
);

CREATE TABLE `scores` (
    score_id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    score TINYINT UNSIGNED NOT NULL,
    picture_id INT UNSIGNED NOT NULL,
    create_by INT UNSIGNED NOT NULL,
    create_time INT(10) NOT NULL,
    edit_by INT UNSIGNED NOT NULL,
    edit_time INT(10) NOT NULL
);

CREATE TABLE `tags` (
    tag_id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tag VARCHAR(20) NOT NULL,
    picture_id INT UNSIGNED NOT NULL,
    create_by INT UNSIGNED NOT NULL
);