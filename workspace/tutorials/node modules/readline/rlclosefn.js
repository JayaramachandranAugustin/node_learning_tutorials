var readline=require("readline");

var rl=readline.createInterface({
    output:process.stdout,
    input:process.stdin
});

rl.question("Hi How are you? ",function(answer){
      console.log(answer);  
    //Closes the interface instance. It will also check any close call back function written.
    //if close call function written it will execute that before closing 
    rl.close();
});

rl.on("close",function(){
    console.log("The readline interface closed");
});