function isIsogram(str){
  return [...new Set(str.toLowerCase().split(''))].length == str.length;
}
