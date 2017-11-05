var spiralize = function(size) {
  var spiral = [];
  for (var i = 0; i < size; i++) {
      spiral.push(new Array(size - 1));
  }
  for (var s = 0; s < spiral.length; s++) {
      for (var h = 0; h < spiral.length; h++) {
          spiral[s][h] = 0;
      }
  }
  var count = size + 0;
  var arr = [[size, 'r']];
  count -= 1;
  while (count > 0) {
      for (var x = 0; x < 2; x++){
          arr.push([count]);
      }
      count -= 2;
  }
  for(var y = 1; y < arr.length; y++) {
      switch(arr[y - 1][1]) {
          case 'r':
              arr[y][1] = 'd';
              break;
          case 'd':
              arr[y][1] = 'l';
              break;
          case 'l':
              arr[y][1] = 'u';
              break;
          case 'u':
              arr[y][1] = 'r';
              break;
      }
  }
  if (size % 2 != 0) {
   arr[arr.length - 1][0]++;
  }
  var X = 0;
  var Y = 0;
  for (var j = 0; j < arr.length; j++) {
      switch(arr[j][1]) {
          case 'r':
              for (var z = 0; z < arr[j][0]; z++) {
                  spiral[Y][X] = 1;
                  X++;
              }
              break;
          case 'd':
              for (var z = 0; z < arr[j][0]; z++) {
                  spiral[Y][X] = 1;
                  Y++;
              }
              break;   
          case 'l':
              for (var z = 0; z < arr[j][0]; z++) {
                  spiral[Y][X] = 1;
                  X--;
              }
              break; 
          case 'u':
              for (var z = 0; z < arr[j][0]; z++) {
                  spiral[Y][X] = 1;
                  Y--;
              }
              break;       
      }    
  }
  return spiral.map(function(a){
      a.shift();
      return a;
  });
}
