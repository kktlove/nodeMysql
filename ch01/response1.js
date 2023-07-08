require('http').createServer((request, response)=>{
  response.writeHead(200, {'content-type': 'text/html; charset=utf-8'}); 
  // 한글화 하려면 charset=utf-8 필수
  response.write('<h1>Hello Node !</h1>'); 
  // 스트림 형식으로 작성
  response.end('<p>hello web server with node.js</p>');
  
}).listen(52273, function(){
  console.log('Server Running at http://127.0.0.1:52273');
});