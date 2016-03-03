var fs=require("fs");

var stream=fs.createWriteStream("./files/info.txt");

stream.write("INFO\n");
stream.write("****\n\n");

stream.write("Only 3% of water percent in the earth is used of drinking");