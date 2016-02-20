//process example
console.log(process.argv);
console.log(`The current system architecture is ${process.arch}`);
console.log(`Current directory: ${process.cwd()}`);


function getValue(key){
    var index=process.argv.indexOf(key);
    return (index===-1)?null:process.argv[index+1];
}
var name=getValue('__name');
var gender=getValue('__gender');

if(!name || !gender){
    console.log("Enter name and gender!!!");
}
else{
    var salutation=gender==='male'?'Mr':'Ms';
    console.log(`${salutation} ${name}`);
}