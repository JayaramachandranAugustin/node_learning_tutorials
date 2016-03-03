var http = require("http");
var data = require("./content/data.json");

var server = http.createServer(function(req, res) {
    console.log(req.url);
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/json"
        });
        res.end(JSON.stringify(data));
    }
    else if(req.url==="/ase"){
        console.log("aseData");
        res.writeHead(200,{"Content-Type":"text/json"});
        listASE(res);
    }
     else if(req.url==="/ast"){
         console.log("astData");
        res.writeHead(200,{"Content-Type":"text/json"});
        res.end(JSON.stringify(listAST(res)));
    }
     else {
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Data not found");
    }
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    var addr = server.address();
    console.log("Chat server listening at", addr.address + ":" + addr.port);
});

function listAST(res) {
    var astData = data.filter(function(item) {
        return item.designation === "AST";
    });
    res.end(JSON.stringify(astData));
}

function listASE(res) {
    var aseData = data.filter(function(item) {
       return item.designation === "ASE";
    });
    res.end(JSON.stringify(aseData));
}