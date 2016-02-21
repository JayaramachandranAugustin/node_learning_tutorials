var fs = require("fs");

fs.readdir("D:/", function(err, data) {
	if (err) {
		throw new Error("this folder is not accesible");
	}
console.log(data);

});

console.log("The list of folders and files in the current folder")