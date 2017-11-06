function validBraces(braces){
  //TODO 
  const l = braces.length
  for (var x = 0; x <= l; x++){
      braces = braces.split("{}").join('').split("()").join('').split("[]").join('');
  } 
  if (braces.length == 0) {
      return true;
  }
  return false;
}
