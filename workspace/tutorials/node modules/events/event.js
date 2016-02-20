var events=require("events");

var EventEmitter=new events.EventEmitter();

EventEmitter.on("callme",function(message,code){
    console.log(`${code} : ${message}`);
});

EventEmitter.emit("callme","Page not found",404);