var fs=require("fs");
var readline=require("readline");

var rl=readline.createInterface({
   input:process.stdin,
   output:process.stdout
});

rl.question("What is the player name ?",function(data){
    fs.writeFileSync(data.toString()+".txt",data.toString());
    rl.setPrompt("Enter the "+data.toString()+" Score");
    rl.prompt();
    rl.on("line",function(score){
        fs.appendFile(data.toString()+".txt",parseInt(score))
        if(parseInt(score)===-1){
            rl.close();
        }
        else{
            rl.setPrompt("Enter the score of the player (-1 to exit)");
            rl.prompt();
        }
    });
});