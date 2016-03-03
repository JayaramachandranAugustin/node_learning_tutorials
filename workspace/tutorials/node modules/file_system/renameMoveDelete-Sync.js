var fs = require("fs");

//To create the file
try {
	fs.writeFileSync("./files/todelete.txt", "some content");
} catch (err) {
	console.log("Cant able to create the file");
}
//To rename the file
try {
	fs.renameSync("./files/todelete.txt", "./files/todelete.md");
} catch (err) {
	console.log("Cant able to rename the file")
}
//To Move the file
try {
	fs.renameSync("./files/todelete.txt", "todelete.md");
} catch (err) {
	console.log("Cant able to rename the file")
}
//To delete the file
try {
	//fs.unlinkSync("todelete.md");
} catch (err) {
	console.log("Cant able to delelte the file")
}

console.log("file created, renamed and deleted successfully");