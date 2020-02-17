USE setu;
INSERT INTO `setu`.`pictures` (
    create_by,
    create_time,
    edit_by,
    edit_time,
    picture_dir,
    picture_id,
    thumb_dir
  )
VALUES
  (1,1581497585,1,1581497585,'pictures/IMG_0184.PNG',4,'pictures/IMG_0184.PNG'),
  (1,1581497585,1,1581497585,'pictures/IMG_0312.JPG',5,'pictures/IMG_0312.JPG'),
  (1,1581497585,1,1581497585,'pictures/IMG_0324.PNG',6,'pictures/IMG_0324.PNG'),
  (1,1581497585,1,1581497585,'pictures/IMG_0455.JPG',7,'pictures/IMG_0455.JPG'),
  (1,1581497585,1,1581497585,'pictures/IMG_0492.JPG',8,'pictures/IMG_0492.JPG'),
  (1,1581497585,1,1581497585,'pictures/IMG_0515.JPG',9,'pictures/IMG_0515.JPG'),
  (1,1581497585,1,1581497585,'pictures/IMG_0561.JPG',10,'pictures/IMG_0561.JPG');

INSERT INTO `setu`.`tags` (create_by, picture_id, tag, tag_id)
VALUES
  (1, 2, '测试tag1', 3),
  (1, 2, '测试tag1', 4),
  (1, 3, '测试tag1', 5),
  (1, 4, '测试tag1', 6),
  (1, 5, '测试tag1', 7),
  (1, 5, '测试tag1', 8);


