//Tutorial for global

//Global console example
var greet="How are you!";
global.console.log("Welcome to node js tutorial");

//String Template Example
console.log(`Hi David, ${greet}`);

//__dirname example
console.log(__dirname);

//__filename example
console.log(__filename);

//require example
var path=require("path");
console.log(`The file name is ${path.basename(__filename)}`);



//setTimeout without parameter example
function printName(){
    console.log("My name is david");
}

setTimeout(printName,2000);

//setTimeout with parameter example
var a=2000;
setTimeout(function(){
    console.log(`This will be printed after ${a} ms delay`);
},a);


//clearTimeout example
function noResult(){
    console.log("This won't get printed");
}
var to=setTimeout(noResult,3000);
clearTimeout(to);

//setInterval example
/* --remove this line to test seInterval example
function printEverysec(a){
    console.log(`Print every second ${a}`);
}
setTimeout(function(){
    printEverysec(100);
},5000);
*/ //remove this line to test seInterval example


//clearInterval example
function printevery2sec(){
    console.log("wont print after evey 2 sec");
}
var to2=setInterval(printevery2sec,2000);
clearInterval(to2);


