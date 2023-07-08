const { parse } = require('path');

//URL
var url = require('url');

var parseObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code= B4250257160');
// console.log(parseObject);

//쿼리스트링
var querystring = require('querystring');
console.log(querystring.parse(parseObject.query));