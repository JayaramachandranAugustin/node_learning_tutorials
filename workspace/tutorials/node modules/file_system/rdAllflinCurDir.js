var fs = require("fs");
var path = require("path");
var dir = "D:/David documents/Tutorials/Nodejs/node_learning_tutorials/workspace/tutorials/node modules/readline";
fs.readdir(dir, function(err, data) {
	// body
	for (var i = 0; i < data.length; i++) {
		var fileName = path.join(dir, data[i]);
		console.log(fileName);
			console.log("Entered : "+fileName);
			var stats = fs.statSync(fileName);
			if (stats.isFile()) {
				fs.readFile(fileName, "UTF-8", function(err, contents) {
					console.log(contents);
				});
			}
	}

});