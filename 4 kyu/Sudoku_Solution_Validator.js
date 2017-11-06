function validSolution(board){
  //TODO
  for (var x = 0; x < 9; x++) {
      if(board[x].reduce(function(a, b){ return a + b}) != 45){
         return false;
     }
  }
  for (var y = 0; y < 9; y++) {
      var sum = 0;
      for (var i = 0; i < 9; i++) {
          sum += board[i][y];
      }
      if (sum != 45) {
          return false
      }
      sum = 0;
  }
   
  var arr = [];
  var arr2 = [];
  for (var z = 0; z < 9; z++) {
      arr.push(board[z].slice(0, 3));
      arr.push(board[z].slice(3, 6));
      arr.push(board[z].slice(6));
  }
  for (var n = 0; n < 20; n += 9) {
     for (var w = n + 0; w < n + 3; w++) {
        var temp = [arr[w], arr[w + 3], arr[w + 6]].reduce(function(a, b) {
          return a.concat(b);
        });
        arr2.push(temp);
     } 
  }
  for (var f = 0; f < 9; f++) {
     if(arr2[f].reduce(function(c, d){ return c + d}) != 45){
         return false;
     }
  }
  
  return true;
  
}
