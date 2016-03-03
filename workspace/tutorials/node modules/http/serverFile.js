var http = require("http");
var fs=require("fs");
var path=require("path");

var server = http.createServer(function(req, res) {
    console.log("The URL is "+req.url);
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.readFile("content/index.html","UTF-8",function(err,data){
            if(err){
                console.log("Error message is "+err.message);
            }
            res.end(data);
        });
        
    }
    else if(req.url.match(/.css$/)){
        res.writeHead(200,{"Content-Type":"text/css"});
        var styleStream=fs.createReadStream("content/style.css","UTF-8");
        styleStream.pipe(res);
    }
    else if(req.url.match(/.jpg$/)){
        res.writeHead(200,{"Content-Type":"image/jpeg"});
        var imageStream=fs.createReadStream("content/image.jpg");
        imageStream.pipe(res);
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("Page not found");
    }

});
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    var addr = server.address();
    console.log("Chat server listening at", addr.address + ":" + addr.port);
});