var fs = require('fs');
var http = require('http');

http.createServer(function(request,response){
    fs.readFile('../images/kimkitae.jpg',function(error,data){
        //가져올 타입이 이미지이면 Content-Type:image/jpeg
        response.writeHead(200,{'Content-Type':'image/jpeg'});
        response.end(data);
    })
}).listen(7777,function(){
    console.log('Server Running at http://127.0.0.1:7777')
});

//사이트를 두개 만들고 싶으면 포트번호를 꼭 다르게 만들어야 함
http.createServer(function(request,response){
    fs.readFile('htmlPage.html',function(error,data){
        //가져올 타입이 이미지이면 Content-Type:image/jpeg
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(data);
    })
}).listen(7778,function(){
    console.log('Server Running at http://127.0.0.1:7778')
});