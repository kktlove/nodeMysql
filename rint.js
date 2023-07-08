const EventEmitter = require('events');
var custom = new EventEmitter();
setInterval(()=>{
  exports.timer.emit('tick');
}, 1000);