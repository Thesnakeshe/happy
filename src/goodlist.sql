/*
Navicat MySQL Data Transfer

Source Server         : snake
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : goodlist

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-29 10:43:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `save` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('0', '../images/bao3.png', 'Decent Module Silicone skin Cover for iPhone...', '412', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('1', '../images/bao1.png', 'Decent Module Silicone skin Cover for iPhone...', '290', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('2', '../images/bao2.png', 'Decent Module Silicone skin Cover for iPhone...', '450', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('3', '../images/bao3.png', 'Decent Module Silicone skin Cover for iPhone...', '330', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('4', '../images/bao4.png', 'Decent Module Silicone skin Cover for iPhone...', '240', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('5', '../images/bao5.png', 'Decent Module Silicone skin Cover for iPhone...', '235', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('6', '../images/bao1.png', 'Decent Module Silicone skin Cover for iPhone...', '412', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('7', '../images/bao2.png', 'Decent Module Silicone skin Cover for iPhone...', '290', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('8', '../images/bao3.png', 'Decent Module Silicone skin Cover for iPhone...', '450', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('9', '../images/bao4.png', 'Decent Module Silicone skin Cover for iPhone...', '330', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('10', '../images/bao5.png', 'Decent Module Silicone skin Cover for iPhone...', '240', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('11', '../images/bao1.png', 'Decent Module Silicone skin Cover for iPhone...', '235', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('12', '../images/bao2.png', 'Decent Module Silicone skin Cover for iPhone...', '412', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('13', '../images/bao3.png', 'Decent Module Silicone skin Cover for iPhone...', '290', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('14', '../images/bao4.png', 'Decent Module Silicone skin Cover for iPhone...', '450', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('15', '../images/bao5.png', 'Decent Module Silicone skin Cover for iPhone...', '330', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('16', '../images/bao1.png', 'Decent Module Silicone skin Cover for iPhone...', '240', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('17', '../images/bao2.png', 'Decent Module Silicone skin Cover for iPhone...', '235', '30', '2018/10/11');
INSERT INTO `goodlist` VALUES ('18', '../images/bao3.png', 'Decent Module Silicone skin Cover for iPhone...', '412', '30', '2018/10/11');

-- ----------------------------
-- Table structure for letianuser
-- ----------------------------
DROP TABLE IF EXISTS `letianuser`;
CREATE TABLE `letianuser` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `zhanghao` varchar(255) DEFAULT NULL,
  `mima` varchar(255) DEFAULT NULL,
  `emails` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of letianuser
-- ----------------------------
INSERT INTO `letianuser` VALUES ('1', 'aa123', 'aa123', 'qq@qq.com');
INSERT INTO `letianuser` VALUES ('2', 'bb123', 'bb123', '111@qq.com');
INSERT INTO `letianuser` VALUES ('3', '12336', '2586', '89555');
INSERT INTO `letianuser` VALUES ('4', 'undefined', '', '');
INSERT INTO `letianuser` VALUES ('5', 'asfasdfadfsdf', 'sdfasdffasd', 'qqqw@qq.com');
INSERT INTO `letianuser` VALUES ('6', 'asdasadf', 'adfadfadsfasd', 'asads@qq.com');
INSERT INTO `letianuser` VALUES ('7', 'asdfdsdsa', 'asdasda12312', 'qqsad@dad.com');
INSERT INTO `letianuser` VALUES ('8', '', '', '');

-- ----------------------------
-- Table structure for ship
-- ----------------------------
DROP TABLE IF EXISTS `ship`;
CREATE TABLE `ship` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `english` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `dols` int(11) DEFAULT NULL,
  `cny` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ship
-- ----------------------------
INSERT INTO `ship` VALUES ('1', 'images/img2.jpg', '汤姆·福特', 'TOM FORD BEAUTY', 'LIP COLOR', '50', '约345元');
INSERT INTO `ship` VALUES ('2', 'images/img3.jpg', '迪奥', 'DIOR', '迪奥魅惑唇釉', '65', '约385元');
INSERT INTO `ship` VALUES ('3', 'images/img4.jpg', '悦木之源', 'origins', '韦博士灵芝焕能好底子精华水', '34', '约234.6元');
INSERT INTO `ship` VALUES ('4', 'images/img5.jpg', '科颜氏', 'KIEHL S', 'ULTRA FACAIL TONER 高保湿精华液', '20', '约138元');
INSERT INTO `ship` VALUES ('5', 'images/img6.jpg', '乔治·阿玛尼', 'GIORGIO D\'ARMANI 口红 44.2ml', '口红4.2ml', '32', '约222.87元');
INSERT INTO `ship` VALUES ('6', 'images/img4.jpg', '兰蔻', 'LANXOME', '兰蔻持妆清透粉底液', '52', '约358.8元');
INSERT INTO `ship` VALUES ('7', 'images/img5.jpg', '汤姆·福特', 'TOM FORD BEAUTY', 'LIP COLOR', '92', '约349元');
INSERT INTO `ship` VALUES ('8', 'images/img6.jpg', '迪奥', 'DIOR', '迪奥魅惑唇釉', '74', '约385元');
INSERT INTO `ship` VALUES ('9', 'images/img2.jpg', '汤姆·福特', 'TOM FORD BEAUTY', 'LIP COLOR', '56', '约345元');
INSERT INTO `ship` VALUES ('10', 'images/img3.jpg', '迪奥', 'DIOR', '迪奥魅惑唇釉', '38', '约385元');
INSERT INTO `ship` VALUES ('11', 'images/img4.jpg', '悦木之源', 'origins', '韦博士灵芝焕能好底子精华水', '34', '约234.6元');
INSERT INTO `ship` VALUES ('12', 'images/img5.jpg', '科颜氏', 'KIEHL S', 'ULTRA FACAIL TONER 高保湿精华液', '12', '约138元');
INSERT INTO `ship` VALUES ('13', 'images/img6.jpg', '乔治·阿玛尼', 'GIORGIO D\'ARMANI 口红 44.2ml', '口红4.2ml', '25', '约222.87元');
INSERT INTO `ship` VALUES ('14', 'images/img4.jpg', '兰蔻', 'LANXOME', '兰蔻持妆清透粉底液', '58', '约358.8元');
INSERT INTO `ship` VALUES ('15', 'images/img5.jpg', '汤姆·福特', 'TOM FORD BEAUTY', 'LIP COLOR', '98', '约349元');
INSERT INTO `ship` VALUES ('16', 'images/img6.jpg', '迪奥', 'DIOR', '迪奥魅惑唇釉', '102', '约385元');
INSERT INTO `ship` VALUES ('17', 'images/img2.jpg', '汤姆·福特', 'TOM FORD BEAUTY', 'LIP COLOR', '50', '约345元');
INSERT INTO `ship` VALUES ('18', 'images/img3.jpg', '迪奥', 'DIOR', '迪奥魅惑唇釉', '65', '约385元');
INSERT INTO `ship` VALUES ('19', 'images/img4.jpg', '悦木之源', 'origins', '韦博士灵芝焕能好底子精华水', '34', '约234.6元');
INSERT INTO `ship` VALUES ('20', 'images/img5.jpg', '科颜氏', 'KIEHL S', 'ULTRA FACAIL TONER 高保湿精华液', '20', '约138元');
INSERT INTO `ship` VALUES ('21', 'images/img6.jpg', '乔治·阿玛尼', 'GIORGIO D\'ARMANI 口红 44.2ml', '口红4.2ml', '32', '约222.87元');
INSERT INTO `ship` VALUES ('22', 'images/img4.jpg', '兰蔻', 'LANXOME', '兰蔻持妆清透粉底液', '52', '约358.8元');
INSERT INTO `ship` VALUES ('23', 'images/img5.jpg', '汤姆·福特', 'TOM FORD BEAUTY', 'LIP COLOR', '92', '约349元');
INSERT INTO `ship` VALUES ('24', 'images/img6.jpg', '迪奥', 'DIOR', '迪奥魅惑唇釉', '74', '约385元');
INSERT INTO `ship` VALUES ('25', 'images/img2.jpg', '汤姆·福特', 'TOM FORD BEAUTY', 'LIP COLOR', '56', '约345元');
INSERT INTO `ship` VALUES ('26', 'images/img3.jpg', '迪奥', 'DIOR', '迪奥魅惑唇釉', '38', '约385元');
INSERT INTO `ship` VALUES ('27', 'images/img4.jpg', '悦木之源', 'origins', '韦博士灵芝焕能好底子精华水', '34', '约234.6元');
INSERT INTO `ship` VALUES ('28', 'images/img5.jpg', '科颜氏', 'KIEHL S', 'ULTRA FACAIL TONER 高保湿精华液', '12', '约138元');
INSERT INTO `ship` VALUES ('29', 'images/img6.jpg', '乔治·阿玛尼', 'GIORGIO D\'ARMANI 口红 44.2ml', '口红4.2ml', '25', '约222.87元');
INSERT INTO `ship` VALUES ('30', 'images/img4.jpg', '兰蔻', 'LANXOME', '兰蔻持妆清透粉底液', '58', '约358.8元');
INSERT INTO `ship` VALUES ('31', 'images/img5.jpg', '汤姆·福特', 'TOM FORD BEAUTY', 'LIP COLOR', '98', '约349元');
INSERT INTO `ship` VALUES ('32', 'images/img6.jpg', '迪奥', 'DIOR', '迪奥魅惑唇釉', '102', '约385元');

-- ----------------------------
-- Table structure for usership
-- ----------------------------
DROP TABLE IF EXISTS `usership`;
CREATE TABLE `usership` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `zhanghao` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `english` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `dols` varchar(255) DEFAULT NULL,
  `cny` varchar(255) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `suoyin` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usership
-- ----------------------------
INSERT INTO `usership` VALUES ('19', 'bb123', 'images/img2.jpg', '汤姆·福特', 'TOM FORD BEAUTY', 'LIP COLOR', '50', '约345元', '1', '1');
INSERT INTO `usership` VALUES ('18', 'bb123', 'images/img3.jpg', '迪奥', 'DIOR', '迪奥魅惑唇釉', '65', '约385元', '95', '2');

-- ----------------------------
-- Table structure for uses
-- ----------------------------
DROP TABLE IF EXISTS `uses`;
CREATE TABLE `uses` (
  `ID` int(60) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `word` varchar(255) CHARACTER SET armscii8 NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of uses
-- ----------------------------
INSERT INTO `uses` VALUES ('1', '宁缺', 'wee455');
INSERT INTO `uses` VALUES ('2', '桑桑', 'ss56222');
INSERT INTO `uses` VALUES ('3', '颜瑟', 'ssa5584');
INSERT INTO `uses` VALUES ('5', '爱呀', '111');
INSERT INTO `uses` VALUES ('6', '123', '111');
INSERT INTO `uses` VALUES ('7', '233', '111');
INSERT INTO `uses` VALUES ('8', '1212', '111');
INSERT INTO `uses` VALUES ('9', '哎哎哎', '111');
INSERT INTO `uses` VALUES ('10', '2333', '111');
INSERT INTO `uses` VALUES ('11', '111111', '111');
INSERT INTO `uses` VALUES ('12', '12123', '111');
INSERT INTO `uses` VALUES ('13', '氢气球', '111');
INSERT INTO `uses` VALUES ('14', '2222', '111');
INSERT INTO `uses` VALUES ('15', '2222222222', '222');
INSERT INTO `uses` VALUES ('16', '佘可爱', '111');
INSERT INTO `uses` VALUES ('17', 'QQ群', '111');
INSERT INTO `uses` VALUES ('18', '4444', '111');
INSERT INTO `uses` VALUES ('19', '1111111111', '111');
INSERT INTO `uses` VALUES ('22', '13131331', '111');
SET FOREIGN_KEY_CHECKS=1;
