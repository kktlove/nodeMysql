//모듈 로딩과 웹 서버 생성을 동시에
require('http').createServer().listen(52273, function(){
  console.log('Server Running at http://127.0.0.1:52273');
})