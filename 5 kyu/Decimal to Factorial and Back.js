const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
function factorial(n) {
    if(n==0) {
        return 1;
    }
    return n*factorial(n-1);
}
function dec2FactString(nb) {
	var res = '';
  var c = 1;
  while (nb > 0) {
      res += digits[nb%c]
      nb = parseInt(nb/c);
      c++;
  }
	return res.split('').reverse().join('');
}
function factString2Dec(str) {
	str = str.split('').reverse().join('');
  var res = 0;
  for(var x = 0; x < str.length; x++) {
      res += digits.indexOf(str[x])*factorial(x);
  }
  return res;
}
