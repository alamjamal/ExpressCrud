const http = require("http");
const path = require("path");
const fs = require("fs");

const hostname = "localhost";
const port = 3000;
console.log(path.resolve("./"));

const server = http.createServer((req, res) => {
    // console.log(req.headers);
    // console.log(req.url, req.method);
    var fileUrl;
    var filePath;
    var fileExt;

    if (req.method === "GET") {
        if (req.url === "/") {
            fileUrl = "/index.html";
        } else fileUrl = req.url;
        filePath = path.resolve("./alam" + fileUrl);
        fileExt = path.extname(filePath);
        if (fileExt === ".html") {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader("Content-Type", "text/html");
                    res.end("<html><body><h1> not </html></body></h1>");
                }
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                fs.createReadStream(filePath).pipe(res);
            });
        } else {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html");
            res.end("<html><body><h1> not </html></body></h1>");
        }
    }
});
server.listen(port, hostname, () => {
    console.log(`server running at ${port} : ${hostname}`);
});
