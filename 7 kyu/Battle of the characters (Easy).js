function battle(x, y) {
   var alph = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var a = 0;
   var b = 0;
   for (let i of x) {
       a += alph.indexOf(i);
   }
   for (let i of y) {
       b += alph.indexOf(i);
   }
   return a>b? x:b>a?y:'Tie!';
}
