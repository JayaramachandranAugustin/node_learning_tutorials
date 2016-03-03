var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
    if (req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        fs.createReadStream("content/form.html", "UTF-8").pipe(res);
    }
    else if (req.method === "POST") {
        var data="";
        req.on("data",function(chunk){
            data+=chunk;
        });
        req.on("end",function(){
            console.log("The data is "+data);
           res.writeHead(200,{"Content-Type":"text/plain"});
           res.end(data);
        });
    }
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    var addr = server.address();
    console.log("Chat server listening at", addr.address + ":" + addr.port);
});