function order(words){
  // ...
  var arr = words.split(' ');
  var arrOrd = [];
  var count = 0;
  arr.map(function(x) {
      while(count <= arr.length) {
          if (x.includes(count + 1)) {
              arrOrd[count] = x;
              count = 0;
              break;
          } else {
               count++;
          }
      } count = 0;
      return x;
  });
  return arrOrd.join(' ');
}
