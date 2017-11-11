function incrementString (strng) {
  if(!strng.match(/\d+/)) {
      return strng + '1';
  }
  var a = (parseInt(strng.match(/\d+/)[0]) + 1).toString();
  while(a.length < strng.match(/\d+/)[0].length) {
      a = '0' + a;
  }
  return strng.replace(/\d+/, a);
}
