const os = require('os');

//user info
const user = os.userInfo();

console.log('OS user is ',user);

//syetem uptime
console.log(`System uptime is ${os.uptime()} seconds`);

//currentOS 
const currentOS = {
    type : os.type(),
    release : os.release(),
    free : os.freemem(),
    total : os.totalmem()
}
console.log('Current OS : ', currentOS);

