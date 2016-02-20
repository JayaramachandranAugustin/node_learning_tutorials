var eventEmitter=require("events");
var util= require("util");

var alarm=function(name){
    this.name=name
}
util.inherits(alarm,eventEmitter);

var burglarAlarm=new alarm("Burglar Alarm");


burglarAlarm.on("entry",function(message,warningCode){
   console.log(`Warning code ${warningCode} : ${message}` ); 
});

burglarAlarm.emit("entry","Some one entering",5000);