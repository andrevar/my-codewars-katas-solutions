function deleteNth(arr,x){
  // ...
  var obj = {};
  return arr.filter(function(n) {
    obj[n] = (obj[n] || 0) + 1;
    return obj[n] <= x;
  });
}
