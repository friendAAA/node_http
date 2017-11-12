const eventEmiter=require('events');
let emitter = new eventEmiter();
emitter.on('test',()=>{
	console.log('test');
});
console.log('start');
console.log('end');
emitter.emit('test');
