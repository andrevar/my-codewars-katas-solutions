var maxSequence = function(arr){
  // ...
 if (arr.length == 0 || arr.every(function(a) {return a < 0; })) {
     return 0;
 }
 var array = [];
 var sum;
 for (var x = 0; x < arr.length; x++) {
     sum = 0;
     for (var y = x; y < arr.length; y++) {
         sum += arr[y];
         array.push(sum);
     }
 }
 return array.sort(function (a, b) { return b - a;})[0];
}
