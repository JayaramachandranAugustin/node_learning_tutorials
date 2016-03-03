var fs = require("fs");

var stream = fs.createReadStream("./files/log.txt");

var data = "";

//This will be called once when the data reading starts
stream.once("data", function() {
	process.stdout.write("Data processing starts");
	process.stdout.write("\n \n");
});

//The data will be readed as chunk of data
stream.on("data", function(chunk) {
	console.log("Chunk Size : " + chunk.length + " \n ");
	data += chunk;
});

//Executes when the data reading completes
stream.on("end", function() {
	console.log("Data length is " + data.length);
	//console.log("Data is " + data);
});