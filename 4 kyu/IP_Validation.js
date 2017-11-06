function isValidIP(str) {
  var arr = str.split(".")
  if (arr.length != 4 || !/^\d+\.\d+\.\d+\.\d+$/.test(str)) {
      return false;
  }
  for (var x = 0; x < arr.length; x++) {
      
      if (isNaN(parseInt(arr[x]))) {
          return false;
      } else if (parseInt(arr[x]) > 255 || parseInt(arr[x]) < 0 ) {
          return false;
      } else if (arr[x].length > 1 && arr[x].charAt(0) == "0") {
          return false;
      }
  }
  
  return true;
}
