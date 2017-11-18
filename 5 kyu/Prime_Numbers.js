function isPrime(number) {
    if(number == 2 || number == 3) {
        return true;
    }
    if(number % 2 == 0 || number % 3 == 0 || number < 2) {
        return false;
    }
    var x = 5;
    var N = Math.sqrt(number);
    while (x <= N) {
        if (number % x == 0) {
            return false;
        }
        x++;
    }
    return true; 
}

function getPrimes(start, finish) {
  if (start > finish) {
      let temp = start;
      start =  finish;
      finish = temp;
  }
  var arr = [];
  for (var i = start; i <= finish; i++) {
      if (isPrime(i)) {
          arr.push(i);
      }
  }
  return arr;
}
