const fs = require('fs')
const http  = require('http')
const server = http.createServer();

// fs.writeFile('input.txt','hello hi',(err)=>{
//     console.log("written")
// })


// old way following  complete download
// server.on('request', (req,res)=>{
//     fs.readFile('input.txt', 'utf-8', (err, data)=>{
//         if(err) return console.error(err);
//         res.end(data.toString())
//     })
// })


//new way stream data byte to byte or chunk by chunk
server.on('request', (req,res)=>{

const rstream=fs.createReadStream('input.txt')
rstream.on('data',(chunkData)=>{
    res.write(chunkData)
})
rstream.on('end',()=>{
    res.end()
})
rstream.on('error',(err)=>{
    console.log(err);
    res.end("file not found")
})
})
server.listen(3000, 'localhost',()=>{
    console.log("server is listening");
})