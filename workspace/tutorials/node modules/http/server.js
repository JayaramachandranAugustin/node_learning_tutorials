var http=require("http");

var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});//first is response statusCode (200 denotes successful response) second header
    
    res.end("Hi David");
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
