var fs = require("fs");

//Create a directory named test
try {
	fs.mkdirSync("test");
} catch (err) {
	console.log(err);
}

//Create the files inside the test directory
fs.writeFileSync("./test/test1.txt", "Test1 content"); 

fs.writeFileSync("./test/test.txt", "Test content");


//Read all the files inside the folder and delete
//Before deleting the directory we need to delete the files inside the directory
fs.readdirSync("test").forEach(function(fileName) {
	fs.unlinkSync("./test/" + fileName);
});


//Remove the directory
fs.rmdir("test", function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("folder deleted successfully");
	}
});