var palindromeChainLength = function(n) {
  if(n.toString().length == 1) {
      return 0;
  } else if (n.toString() == n.toString().split('').reverse().join('')) {
      return 0;
  }
  function pal(n, c) {
    var num = n + parseInt(n.toString().split('').reverse().join(''));
    if (num.toString() == num.toString().split('').reverse().join('')) {
        c++;
        return c;
    } else {
        return pal(num, c + 1);
    }
  }
  return pal(n, 0);
};
