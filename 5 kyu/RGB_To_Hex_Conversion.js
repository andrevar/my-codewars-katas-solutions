function rgb(r, g, b){
  // complete this function 
  var arr = [r,g,b];
  arr = arr.map(function(a) {
      if (a < 0) {
        a = 0;
      } else if (a > 255) {
        a = 255;
      } 
      if (a < 10) {
       return '0' + a.toString(16).toUpperCase();
     } else {
       return  a.toString(16).toUpperCase();
     }
  });      
  
  return arr[0] + arr[1] + arr[2]; 
}
