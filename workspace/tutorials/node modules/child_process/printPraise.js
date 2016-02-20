var praise=["Exellant","Beautiful","Kind","Smart","Nice","Good","Awesome","Brilliant","Hard-working","Knowledgefull"
    ];
    
    var timeInterval=setInterval(function(){
        var i=Math.floor(Math.random()*praise.length);

        console.log("You are "+praise[i]);
    },1000);
    
    process.stdin.on("data",function(data){
        console.log("Praising stopped "+data.toString().trim());
        clearInterval(timeInterval);
        process.exit();
    });
    