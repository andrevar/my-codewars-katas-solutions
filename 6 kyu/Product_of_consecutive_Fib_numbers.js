function productFib(prod){
  // ...
  var n1 = 0;
  var n2 = 1;
  while (n1*n2 < prod) {
      n1 += n2;
      if(n1*n2 == prod) {
          return [n2, n1, true];
      } else if (n1*n2 > prod) {
          return [n2, n1, false];
      }
      n2 += n1;
      if(n1*n2 == prod) {
          return [n1, n2, true];
      } else if (n1*n2 > prod) {
          return [n1, n2, false];
      } 
  }
}
