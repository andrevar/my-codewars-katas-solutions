function pickPeaks(arr){
  var ps = [];
  var pk = [];
  for (var x = 1; x < arr.length; x++) {
      if(arr[x] > arr[x - 1]) {
          for (var y = x + 1; y < arr.length; y++) {
              if(arr[y] > arr[x]) {
                  break;
              } else if (arr[y] < arr[x]) {
                  pk.push(arr[x]);
                  ps.push(x);
                  break;
              }
          }  
      }
  }
  return {pos: ps, peaks: pk};
}
