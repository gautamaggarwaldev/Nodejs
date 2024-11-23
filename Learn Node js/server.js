var http = require("http");
http.createServer(function (req, res) {
    res.write("GG ki Pathshala!!!!");
    res.end();
}).listen(8080);