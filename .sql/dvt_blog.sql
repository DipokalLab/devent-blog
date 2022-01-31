# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.6.4-MariaDB)
# Database: f1
# Generation Time: 2022-01-16 05:11:04 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table users
# ------------------------------------------------------------

CREATE TABLE `articles` (
  `idx` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(60) DEFAULT '''''',
  `intro` varchar(100) DEFAULT '...',
  `tag` varchar(50) DEFAULT '아티클',
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `feeds` (
  `idx` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `feed_title` varchar(30) DEFAULT '''''',
  `feed_intro` varchar(300) DEFAULT '...',
  `feed_content` varchar(5000) DEFAULT '......',
  `feed_tag` varchar(800) DEFAULT '기술 블로그',
  `feed_date` varchar(50) DEFAULT '0000.00.00.00.00.00',
  `feed_owner` varchar(40) DEFAULT 'pkr',
  `feed_article` int(11) DEFAULT 0,
  `feed_image` varchar(700) DEFAULT '/img/feed.png',
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `users` (
  `idx` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `user_id` varchar(30) DEFAULT NULL,
  `user_pw` varchar(300) DEFAULT NULL,
  `user_email` varchar(50) DEFAULT NULL,
  `user_auth` int(3) DEFAULT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;



LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;


/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
