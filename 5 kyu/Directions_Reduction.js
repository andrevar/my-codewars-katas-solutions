function dirReduc(arr){
  // ...
function fil(ar) {  
  const len = ar.length;
  var array = ar.slice(0);
  for (var x = 0; x < array.length; x++) {
      if (array[x] == "NORTH" && array[x + 1] == "SOUTH" 
          || array[x + 1] == "NORTH" && array[x] == "SOUTH" 
          || array[x] == "WEST" && array[x + 1] == "EAST"
          || array[x + 1] == "WEST" && array[x] == "EAST") {
          array[x] = "";
          array[x + 1] = ""; 
          array = array.filter(function(a) {
              return a != "";
          });
      }
  }
   if (len == array.length) {
       return array;
   } else {
       return fil(array);
   }
  }
  return fil(arr);
}
