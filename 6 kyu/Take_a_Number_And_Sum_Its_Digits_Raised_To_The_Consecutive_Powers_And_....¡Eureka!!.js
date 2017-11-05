function sumDigPow(a, b) {
  // Your code here
  var arr = [];
  var temp;
  for (var i = a; i <= b; i++) {
    var sum = 0;
    temp = i.toString();
    temp = temp.split('');
    for (var j = 0; j <= temp.length; j++) {
      sum += Math.pow(parseInt(temp[j]), j + 1);  
      if (sum == i) arr.push(i);
    }
  }
  return arr;
  
  
}
