var fs=require("fs");
var stat=fs.statSync("lib");
if(stat.isDirectory()){
    console.log("directory already exists")
}
else{
fs.mkdir("lib",function(err){
   if(err){
       console.log(err);
   } 
   else{
       console.log("directory created");
   }
});
}