var helloWorld = function () {
  var zero = [];
  zero = zero.length;
  var one = zero;
  one++;
  var two = one + one;
  var three = two + one;
  var four = two + two;
  var five = three + two;
  var six = three + three;
  var seven = five + two;
  var eight = seven + one;
  var nine = eight + one;
  var arr = [[seven,two],[one,zero,one],[one,zero,eight],[one,zero,eight],
             [one,one,one],[three,two],[eight,seven],[one,one,one],
             [one,one,four],[one,zero,eight],[one,zero,zero],[three,three]];  
  return arr.map(a=>String.fromCharCode(parseInt(a.reduce((b,c)=>b.toString()+c.toString())))).reduce((x,y)=>x+y);
  
  
}
