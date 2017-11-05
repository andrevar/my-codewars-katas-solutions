function findOutlier(integers){
  //your code here
  var odd = 0;
  var even = 0;
  var arr = integers.map(function(a){
      if (Math.abs(a) % 2 == 0){
        even++;
        return a = 0;
      } else if (Math.abs(a) % 2 == 1) {
        odd++;
        return a = 1;
      }
  });
  if ( odd > even ){
    return integers[arr.indexOf(0)];
  
  } else if ( odd < even ){
     return integers[arr.indexOf(1)];
  }

}
