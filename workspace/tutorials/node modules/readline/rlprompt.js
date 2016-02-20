var readline=require("readline");

var rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter the person name ",function(answer){
    console.log(answer);
    rl.setPrompt("Enter the DOB");
     rl.prompt();
});