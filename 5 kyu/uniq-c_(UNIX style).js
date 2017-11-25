function uniq_c(a){
   try {
    if (!a.length)  throw [];   
   }
   catch(e) {
       return e;
   }
   var arr = [[a[0],1]];
   var i = 0;
   for (var x = 1; x < a.length; x++) {
        if (a[x] == a[x - 1]) {
            arr[i][1]++;    
        } else {
            arr.push([a[x],1]);
            i++;
        }      
   }
   console.log(arr)
   return arr;
}
