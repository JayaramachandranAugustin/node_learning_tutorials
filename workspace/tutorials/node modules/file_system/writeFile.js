var fs=require("fs");
var data=fs.statSync("files/read.txt");

fs.writeFile("files/readInfo.txt",JSON.stringify(data), function(err){
	console.log("The statistical info of the read file are copied in readInfo.txt");
})