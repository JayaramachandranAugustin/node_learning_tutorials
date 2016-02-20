var waitTime=5000;
var currentTime=0;
var intervalTime=10;

function getWaitPercentage(p){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    if(p===100){
        process.stdout.write(`Completed ${p}%`);
    }
    else{
        process.stdout.write(`In progress ${p}%`);
    }
}

getWaitPercentage(currentTime);

var intTime=setInterval(function(){
    currentTime+=intervalTime;
    var percentValue=Math.floor((currentTime/waitTime)*100);
    getWaitPercentage(percentValue);
},intervalTime);


setTimeout(function(){
    clearInterval(intTime);
    getWaitPercentage(100);
    console.log("\n\nProcess Completed");
},waitTime);

