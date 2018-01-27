function solve(arr){
   var obj = {};
   var res = [];
   for (let x = 0; x < arr.length; x++) {
       let temp = [...new Set(arr[x])].sort().join('');
       obj[temp] = (obj[temp] + 1) || 1;
       arr[x] = temp;
   }
   for (let i in obj) {
       let temp = 0;
       if (obj[i] > 1) {
           for (let j = 0; j < arr.length; j++) {
               if (arr[j] == i) {
                   temp += j;  
               }
           }
           res.push(temp);
       }
   }
   return res.sort((a,b)=>a-b);
};
