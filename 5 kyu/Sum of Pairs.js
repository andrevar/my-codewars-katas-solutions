var sum_pairs=function(ints, s){
     var obj = {};
     for(let x = 0; x < ints.length; x++) {
         let temp = ints[x];
         let temp2 = s - temp;
         if(temp2 in obj) {
             return [temp2, temp];
         } else {
             obj[temp] = 1;
         }
     }
     return undefined;
}
