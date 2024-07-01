CREATE DATABASE malldb;

CREATE USER 'malluser'@'localhost' IDENTIFIED BY 'malluser';
CREATE USER 'malluser'@'%' IDENTIFIED BY 'malluser';

GRANT ALL PRIVILEGES ON malldb.* TO 'malluser'@'localhost';
GRANT ALL PRIVILEGES ON malldb.* TO 'malluser'@'%';
----

DROP DATABASE malldb;
DROP USER 'malluser'@'localhost';
DROP USER 'malluser'@'%';

SELECT USER, HOST FROM mysql.user
WHERE USER='malluser';