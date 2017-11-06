function palindromize(number){
  if(number.toString().length == 1) {
      return "0 " + number.toString();
  } else if (number.toString() == number.toString().split('').reverse().join('')) {
      return "0 " + number.toString();
  }
  function pal(n, c) {
    var num = n + parseInt(n.toString().split('').reverse().join(''));
    if (num.toString() == num.toString().split('').reverse().join('')) {
        c++;
        return c.toString() + " " + num.toString() ;
    } else {
        return pal(num, c + 1)
    }
  }
  return pal(number, 0);
}
