function removeZeros(array) {
  function move(arr, index) {
    if(index != arr.length - 1) {
      var temp = arr[index];
      arr[index] = arr[index + 1];
      arr[index + 1] = temp;
    if(index + 1 == arr.length - 1) {
        return arr;
      } else {
        return move(arr, index + 1);
      }
    }
  }
  var count = 0;
  for (var x =  0; x < array.length - count; x++) {
     if(array[x] === 0 || array[x] === "0") {
         move(array, x);
         count ++;
         if(array[x] === 0 || array[x] === "0") {
           x--;
         }
     }
  }
  
  return array;
}
