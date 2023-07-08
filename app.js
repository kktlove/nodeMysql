const rint = require('./rint');
rint.timer.on('tick', function(code){
  console.log('이벤트를 실행했습니다.');
})