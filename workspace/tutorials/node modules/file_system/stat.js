var fs = require("fs");
var util = require("util");

fs.stat("files/read.txt", function(err, stats) {
	console.log(util.inspect(stats));
});



console.log("This below are the detail about read.txt");