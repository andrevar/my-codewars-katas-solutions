function binMul(m,n){
  if(m == 0 || n == 0) {return [];}
  var arr = []
  if(n>m) {
      let temp = m;
      m = n;
      n = temp;
  }
  while (m >= 1) {
      if (m % 2 == 1) {
          arr.unshift(n);
      }
      m = parseInt(m/2);
      n *= 2;
  }
  return arr;
}
