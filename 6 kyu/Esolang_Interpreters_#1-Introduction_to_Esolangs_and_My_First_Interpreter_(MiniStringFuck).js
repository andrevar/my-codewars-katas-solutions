function myFirstInterpreter(code) {
  // Implement your interpreter here
  var count = 0;
  var str = "";
  for (var a in code) {
      if (code[a] == "+") {
          if (count == 255) {
              count = 0;
          } else {
              count++;
          }
      } else if (code[a] == ".") {
          str += String.fromCharCode(count);
      } 
  } 
  
  return str;
}
