function howManyIterationsNeeded (num,i = null){
  var count = 0;
  while(true) {
      if(count > 261 || count == i) {
          return null;
      }
      let temp = num.toString().split('').reverse().join('');
      let tempSum = num + parseInt(temp);
      if(tempSum == tempSum.toString().split('').reverse().join('')) {
          return count + 1;
      } else {
          num = tempSum;
      }
      count++;
  }
}
