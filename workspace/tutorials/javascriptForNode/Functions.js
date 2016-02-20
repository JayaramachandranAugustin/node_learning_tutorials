var getArguments=function(id,name,standard){
	var student={
		id:134,
		name:"David",
		standard:"B.Tech"
	}
	var arg=arguments;
	for(var i=0;i<arg.length;i++){
		if(i==0&&typeof arg[0]=="number"){
			student.id=arg[0];
		}
		else if(typeof arg[i]=="string"&&i==1){
			student.name=arg[i];
		}
		else if(typeof arg[i]=="string"&&i==2){
			student.standard=arg[i];
		}
		else{
			throw new Error(i+ arg[i]+" Invalid input type");
		}
	}

	return {student:student};
}

getArguments(586009,"David","B.Tech").student.id;

console.log(getArguments(586009,"David","B.Tech").student.id);
