var fs=require("fs");

fs.writeFileSync("files/readInfo.txt",JSON.stringify(fs.statSync("files/read.txt")));

console.log("The info file created successfully");