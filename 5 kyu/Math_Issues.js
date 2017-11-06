Math.round = function(number) {
  var p = number.toString().split('.');
  if (Number.isInteger(number)) {
      return number;
  }else  if(parseInt(p[1].charAt(0)) < 5) {
      return parseInt(p[0]);
  }
  return parseInt(p[0]) + 1;
};

Math.ceil = function(number) {
  var p = number.toString().split('.');
  if (Number.isInteger(number)) {
      return number;
  }
  return parseInt(p[0]) + 1;
};

Math.floor = function(number) {
  var p = number.toString().split('.');
  return parseInt(p[0]);
};
