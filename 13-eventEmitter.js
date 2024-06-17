const EventEmitter = require('events')

const customEmitter = new EventEmitter()
//first licten th event using on() then emit it using emit()
//execute sequentilly

customEmitter.on('response',()=>{
    console.log('data received');
})
customEmitter.emit('response');

customEmitter.on('result',(firstName) => {
    console.log(`Data Received for ${firstName}`);
})
customEmitter.on('result',() => {
    console.log(`Data Received...................}`);
})
customEmitter.emit('result','jyoti')