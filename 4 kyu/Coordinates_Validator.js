function isValidCoordinates(coordinates){
  if(!coordinates.match(", ")) {
      return false;
  }
  var arr = coordinates.split(', ');
  if(arr[1].match(/[A-Z\, ]/gi) || arr[0].match(/[A-Z\, ]/gi)) {
      return false;
  } 
  if(arr[1].match(/\.[^\.]*\./g) || arr[0].match(/\.[^\.]*\./g)) {
      return false;
  }
  if(parseFloat(Math.abs(arr[0])) > 90 ||  parseFloat(Math.abs(arr[1])) > 180) {
      return false;
  } 
 
  return true;
}
