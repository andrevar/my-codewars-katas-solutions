multiplicationTable = function(size) {
  var arr = [];
  for (var x = 1; x <= size ; x++) {
      let temp = [];
      for(var y = 1; y <= size; y++) {
          temp.push(x * y);
      }
      arr.push(temp);
  }
  return arr;
}
