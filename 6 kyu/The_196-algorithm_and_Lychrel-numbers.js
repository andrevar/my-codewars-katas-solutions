function alg196(n) {
  var count = 0;
  while(true) {
      if(count > 261) {
          return -1;
      }
      let temp = n.toString().split('').reverse().join('');
      let tempSum = n + parseInt(temp);
      if(tempSum == tempSum.toString().split('').reverse().join('')) {
          return tempSum;
      } else {
          n = tempSum;
      }
      count++;
  }
}
