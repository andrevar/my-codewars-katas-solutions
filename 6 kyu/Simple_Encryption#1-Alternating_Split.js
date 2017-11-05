function encrypt(text, n) {
  if(text == null || n < 1 || text.length < 1 || !text) {
      return text;
  } 
  var str = text;
  const myFunction = function (string) {
      var a = "";
      var b = "";
      for (var x = 0; x < text.length; x++) {
          if(x % 2 == 0) {
          b += string.charAt(x);
          } else {
              a += string.charAt(x);
          }
      }
      return a + b;
  }
  var count = n;
  while (count > 0){
     str = myFunction(str);
     count--;
     }
  return str;
}

function decrypt(encryptedText, n) {
if(encryptedText == null ||n < 1 || encryptedText.length < 1 || !encryptedText ) {
      return encryptedText;
  } 
  
  const myFunction = function (string) {
      var a = encryptedText.slice(0, encryptedText.length / 2);
      var b = encryptedText.slice(encryptedText.length / 2);
      var c = "";
      for (var x = 0; x < encryptedText.length; x++) {
          if(x % 2 == 1) {
          c += a.charAt(0);
          a = a.slice(1);
          } else {
              c += b.charAt(0);
              b = b.slice(1);
          }
      }
      return c;
  }
  var count = n;
  
  while (count > 0){
     encryptedText = myFunction(encryptedText);
     count--;
     }
  return encryptedText;


}
