function coprimes(n){
  var arr = [1,2];
  var factors = [], i;
  for (var x = 3; x < n; x++) {
      arr.push(x);
  }
  for (i = 2; i <= n; i++) {
      while ((n % i) === 0) {
      factors.push(i);
      n /= i;
      }
  }
  for (var y = 0; y < arr.length; y++) {
      for (var z = 0; z < factors.length; z++) {
          if (arr[y] % factors[z] == 0) {
              arr[y] = 0;
          }
      }
  }
  arr.sort(function(a ,b) {
      return a - b;
  });

return arr.filter(function(a) {
    return a != 0;
});
};
