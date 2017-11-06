function calc(expr) {
  // TODO: Your awesome code here
  if (expr.length == 0) {
      return 0;
  }
  var arr = expr.split(' ');
  var arrTemp = [];
  arr = arr.map(function(a){
      if (a.match(/(\+|\-|\/|\*)/g)) { 
          return a;
      } else {
          return parseFloat(a);
      }
  });
  function cal(opd, opr1, opr2) {
      var result = 0;
      switch(opd) {
          case "+":
          result = opr1 + opr2;
          break;
          case "-":
          result = opr1 - opr2;
          break;
          case "/":
          result = opr1 / opr2;
          break;
          case "*":
          result = opr1 * opr2;
          break;
      }
      return result;
  }
  for (var x = 0; x < arr.length; x++) {
      if(typeof arr[x] == "number") {
          arrTemp.push(arr[x]);
      } else {
          var a = arrTemp.pop()
          var b = arrTemp.pop()
          var c = cal(arr[x], b, a)
          arrTemp.push(c);
      }
  }
  
  return arrTemp[arrTemp.length - 1];
}
