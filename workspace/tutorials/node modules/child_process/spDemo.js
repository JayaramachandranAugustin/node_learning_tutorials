var spawn=require("child_process").spawn;

var cp=spawn("node",["printPraise"]);

cp.stdout.on("data",function(data){
    console.log("The output from the printPraise.js "+data.toString().trim())
});

cp.on("close",function(){
    console.log("child_process is closed");
    process.exit();
})
setTimeout(function(){
    cp.stdin.write("Stopping the printPraise.js");
    
},5000);