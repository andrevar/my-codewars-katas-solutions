function solution(digits){
  var arr = [];
  var str = digits.toString();
  for (var x = 0; x < str.length - 4; x++) {
    arr.push(str.slice(x, x + 5));
  }

  return arr.map(function(a) {
      return parseInt(a);
  }).sort(function (b, c) {
      return c - b;})[0];
}
