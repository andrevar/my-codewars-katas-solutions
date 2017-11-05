function isIsogram(str){
  //...
  
  
  
return !Boolean(str.match(/(\w).*\1/i));
}
