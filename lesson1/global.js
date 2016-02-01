console.log("Welcome to node js tutorials");
var name='David';

console.log(`Hi ${name}! How are you!`);
console.log(__dirname);
console.log(__filename);

var path=require("path");
console.log(`${path.basename(__filename)}`)
console.log(process.argv);