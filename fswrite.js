var fs = require('fs');
var data = "안녕하세요 김기태대왕..!";

fs.writeFile('TextFileWrite.txt', data, 'utf-8', function(error){
  console.log('write');
});

fs.writeFileSync('TextFileWriteSync.txt', data, 'utf-8');
console.log('write_sync');