const http = require('http')
const {readFileSync, createReadStream} = require('fs')

const server = http.createServer((req,res)=>{
    // const text = readFileSync('./test/subfolder/fourth.txt', 'utf8')
    // res.end(text)
    // stream example
    const stream = createReadStream('./test/subfolder/fourth.txt', 'utf8')
    stream.on('open',()=>{
        stream.pipe(res)
    })
})

server.listen(3000)