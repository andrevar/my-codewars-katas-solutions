function uniq(a) {
   if (!a.length)  return [];   
   var arr = [a[0]];
   for (var x = 1; x < a.length; x++) {
        if (a[x] == a[x - 1]) {
            continue    
        } else {
            arr.push(a[x]);
        }      
   }
   return arr;  
}
