function nextTrain(time, minutes){
    var timeA = time.split(':').reduce((a,b)=> parseInt(a)*60 +parseInt(b))
           + parseInt(minutes);
    if (timeA < 300 || timeA >1410 ) {
        return "The next train is at 05:00."
    }
    var next = timeA + (30 - timeA % 30);
    var hrs = ((next-next%60)/60).toString()
    var min = (next%60).toString()
    if (hrs < 10) { hrs = '0' + hrs;}
    if (min < 10) { min = '0' + min;}
    return `The next train is at ${hrs}:${min}.`;
}
