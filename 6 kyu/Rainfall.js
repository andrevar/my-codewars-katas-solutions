const towns = ["Rome", "London", "Paris", "NY", "Vancouver", "Sydney", "Bangkok", "Tokyo",
               "Beijing", "Lima", "Montevideo", "Caracas", "Madrid", "Berlin"]
    
function mean(town, strng) {
    // Your code
   if(!towns.includes(town)){
       return -1;
   }
      
   var data1 = strng.split("\n");
   for (var x = 0; x < data1.length; x++) {
        var data2;
        if (data1[x].indexOf(town) == 0 ) {
        data2 = data1[x];
        data2 = data2.replace(/[a-zA-Z\:\s]+/g, '').split(',').map(Number.parseFloat);
        var sum = 0;
        for(var y = 0; y < data2.length; y++) {
          sum += data2[y];
        }  
        return sum/ data2.length;
        } 
        
    }
    return -1;
}
function variance(town, strng) {
    // Your code
    if(!towns.includes(town)){
       return -1;
   }
    var mean2 = mean(town, strng);
    var data1 = strng.split("\n");
    for (var x = 0; x < data1.length; x++) {
        var data2;
        if (data1[x].indexOf(town) == 0) {
        data2 = data1[x];
        data2 = data2.replace(/[a-zA-Z\:\s]+/g, '').split(',').map(Number.parseFloat);
        var sum = 0;
        for(var y = 0; y < data2.length; y++) {
          sum += Math.pow(data2[y] - mean2, 2);
        }  
        return sum/ data2.length;
        }
        
    }
    return -1;
    
}
