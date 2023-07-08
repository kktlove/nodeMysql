//http 모듈 추출 (import)
const http = require('http');

//웹 서버 생성
const server = http.createServer();

//포트 설정 - 넉넉하게 큰 번호를 써 주면 충돌할 일이 없다. 
//서버가 실행되면 콘솔에 출력되도록 한다.
server.listen(52273, ()=>{ 
  console.log('Server Running at http://127.0.0.1:52273');
}); 

//20초 후 서버 종료
setTimeout(function(){
    console.log('서버 종료');
    server.close();
  }, 20000);