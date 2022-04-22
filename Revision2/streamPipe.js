//read write both at a time chunk ny chunk in one line
//best way
const fs = require('fs')
const http  = require('http')

const server = http.createServer();
server.on('request', (req,res)=>{
const rstream = fs.createReadStream('input.txt')
rstream.pipe(res)
})

server.listen(3000,'localhost',()=>{
    console.log("listening....");
})