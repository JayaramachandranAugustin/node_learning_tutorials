var EventEmitter=require("events");
var util=require("util");

var alarm=function(name){
    this.name=name
}

util.inherits(alarm,EventEmitter);
module.exports=alarm;

