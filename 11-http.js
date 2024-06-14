//require('./7-mind-granade');

const http = require('http')

// const server = http.createServer((req, res)=>{
//     res.write("Welcome to home page Jyoti")
//     res.end()
// })

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end("Welcome to home page Jyoti")
        return// if not return it will retuen two response and throw error
    }
    if (req.url === '/about'){
        res.end('Heare is a short history')
        return
    }
    res.end(`<h1>Oops...<h1> <p>we can't process the req...</p> <a href="/"> back home </a> `)

})

server.listen(3000)

//goto browser and hit http://localhost:3000/, http://localhost:3000/about, http://localhost:3000/error you will se msg