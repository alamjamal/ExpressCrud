const http =require('http');
const fs = require('fs')
const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=='/'){
        res.write("home or root")
        res.end();
    }else if(req.url=='/contact'){
        res.end("contact page");
    }else if(req.url=='/userapi'){
        const jsonData = fs.readFile("jsonFile.json", "utf-8", (err,data)=>{
            // console.log(data);
            const jsonObj=JSON.parse(data)
            console.log(jsonObj);
            res.writeHead(404,{"content-type":"text/html"})
            res.end(jsonObj[0].name)
        })
    }
    else{
        res.writeHead(404,{"content-type": "text/html"})
        res.end("<h1>page does not exist</h1>")
    }
})

server.listen(3000,'localhost',()=>{
    console.log("listening server");
})