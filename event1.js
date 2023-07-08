const EventEmitter = require('events');
var custom = new EventEmitter();

custom.on('tick', function(code){
  console.log('이벤트가 실행되었습니다.')
})

//emit: 강제로 해당 이벤트를 발생시킨다.
custom.emit('tick');