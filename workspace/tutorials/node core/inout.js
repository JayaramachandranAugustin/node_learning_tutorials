var batsman=['Adam Gilchrist',
             'Mathew Hayden',
             'Damien Martien',
             'Ricky Ponting',
             'Andrew Symonds',
             'Michael Clarke',
             'Darren Lehmann',
             'Brett Lee',
             'Glenn Mgrath',
             'Json Gillespie',
             'Shane Warne'
             ];
process.stdout.write("\n \n  ************Score card************ \n \n");
var runs=[];
var totalRuns=0;
process.stdout.write(`${batsman[runs.length]} : `);
process.stdin.on('data',function(data){
    runs.push(data.toString().trim());
    if(batsman.length>runs.length){
        process.stdout.write(`${batsman[runs.length]} : `);
    }
    else{
        for(var i=0;i<runs.length;i++){
            totalRuns=totalRuns+Number(runs[i].toString().trim());
        }
        process.stdout.write("\n____________________________________________\n");
        process.stdout.write("Total Runs : "+totalRuns);
        process.stdout.write("\n____________________________________________\n");
        process.exit();
    }
});
