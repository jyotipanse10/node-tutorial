const {writeFileSync, createReadStream} = require('fs')

// for(let i =0;i<10000;i++){
//     writeFileSync('./test/subfolder/fourth.txt',`Hello world ${i}\n`,{flag : 'a'})
// }

const stream = createReadStream('./test/subfolder/fourth.txt', {highWaterMark : 90000, encoding : 'utf-8'});
stream.on('data', (result)=> {
    console.log(result);
})

//defaut stream chunk size 64 kb
// HighWaterMark control size



