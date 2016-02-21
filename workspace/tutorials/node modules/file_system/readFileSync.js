var fs=require("fs");

var content=fs.readFileSync("files/read.txt","UTF-8");

console.log(content);

console.log("The above are the contents in the file read.txt");