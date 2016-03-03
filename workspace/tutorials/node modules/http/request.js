var https = require("https");
var fs = require("fs");

var options = {
    hostname: "en.wikipedia.org",
    port: 443, //80 for http
    path: "/wiki/David",
    method: "GET"
};

var req = https.request(options, function(res) {
    var data = "";

    console.log("Data started to receive from server");

    console.log("Server Status", res.statusCode);
    console.log("Header Info", res.headers);

    res.setEncoding("UTF-8");

    res.once("data", function(chunk) {
        console.log(chunk);
    });

    res.on("data", function(chunk) {
        console.log("Chunk Size : " + chunk.length);
        data += chunk;
    });

    res.on("end", function() {
        console.log("Data receiving Stops");
        console.log("Data Size : " + data.length);
        fs.writeFile("david.html", data, function(err) {
            console.log(err);
        });
    });
});


req.on("error", function(err) {
    console.log("Message : " + err.message);
});
req.end();