var nbrOfLaps = function (x, y) {
  var X = x;
  var Y = y;
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return [Y/x, X/x];
}
