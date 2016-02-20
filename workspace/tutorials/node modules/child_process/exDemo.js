var exec=require("child_process").exec;

exec("ls",function(err,stdout){
    if(err){
        throw new Error("Error while executing ls in command prompt");
    }
    console.log("The output of ls command :")
    console.log(stdout);
});