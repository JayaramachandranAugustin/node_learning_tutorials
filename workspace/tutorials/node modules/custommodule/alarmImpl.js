var alarm=require("./lib/alarm");

var burglarAlarm=new alarm("Burglar Alarm");

var mobileAlarm=new alarm("Mobile Alarm");


burglarAlarm.on("warn",function(message,code){
    console.log(`Warning code ${code} : ${message}`);
});

mobileAlarm.on("remind",function(message,code){
   console.log(`Remind event ${code} : ${message}`); 
});

mobileAlarm.emit("remind","Wake up for learning node js",2000);
burglarAlarm.emit("warn","Some one entering alert",500);