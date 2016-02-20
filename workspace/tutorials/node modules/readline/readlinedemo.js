var readline=require("readline");

var rl=readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var player={
    name:"",
    scores:[]
}

rl.question("Enter the name of the person ",function(answer){
    player.name=answer;
    rl.setPrompt(`Enter the ${player.name} scores :`)
    rl.prompt();
    rl.on("line",function(score){
        player.scores.push(score);
        if(parseInt(score)===-1){
            rl.close();
        }
        else{
            rl.setPrompt(`Enter the ${player.name} score (-1 to exit) :`);
            rl.prompt();
        }
    });
});

rl.on("close",function(){
    var totalScore=0;
    for(var i=0;i<player.scores.length;i++){
        totalScore+=parseInt(player.scores[i]);
    }
    console.log("%s scored %j in this season and the totalScore is %s",player.name,player.scores,totalScore);
});
