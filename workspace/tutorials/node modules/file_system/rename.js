var fs = require("fs");

//To rename a file asynchoronously
fs.rename("./files/readme.txt", "./files/readme.md", function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("readme file extension modified");
	}
});

