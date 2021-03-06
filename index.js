/*
 * @Author: kael 
 * @Date: 2018-02-14 17:50:28 
 * @Last Modified by: kael
 * @Last Modified time: 2018-07-10 16:50:09
 */

module.exports = {
  mobile: /^1\d{10}$/,
  qq: /^[1-9]\d{4,10}$/,
  number: /^[-+]?(?:\d+(?:\.\d*)|(?:\d*\.)?\d+)$/,
  email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
  url: /^https:\/\/\w+(\.\w+)+$/,
  ipv4: /^((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))(\.(\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5])){3}$/,
  idcard: /^\d{6}(?:1\d{7})|(?:20\d{6})\d{4}$/,
};