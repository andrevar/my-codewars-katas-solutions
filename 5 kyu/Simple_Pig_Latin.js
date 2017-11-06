function pigIt(str){
  //Code here
  var arr = str.split(' ')
  return arr.map(function(a) {
      let firstChar = a.charAt(0);
      a = a.slice(1);
      return  a += firstChar + "ay";
  } ).join(' ');
}
