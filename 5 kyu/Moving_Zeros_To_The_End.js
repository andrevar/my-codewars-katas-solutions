var moveZeros = function (arr) {
  // TODO: Program me
  var arrZero = arr.filter(function(a) {
      return a === 0;
  });
  return arr.filter(function(a) {
      return a !== 0;
  }).concat(arrZero);
}
