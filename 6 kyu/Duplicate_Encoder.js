function duplicateEncode(word){
    // ...
  var obj = {};
  word = word.toLowerCase();
  var arr = word.split('') ;
  arr.map(function(a){
    obj[a] = (obj[a] || 0) +1;
    return obj[a];
  });
  arr = arr.map(function(a){
      if(obj[a] == 1){
          return "(";
      } else {
          return ")";
      }
   
  });
  
  
  
  return arr.join('');
}  
  
