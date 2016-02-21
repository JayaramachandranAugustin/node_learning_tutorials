var fs = require("fs");
fs.readFile("files/read.txt", "UTF-8", function(err, data) {
	console.log(data);
});