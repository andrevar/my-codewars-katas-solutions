function humanReadable(seconds) {
  // TODD
  var sec = (seconds % 60).toString();
  var min = (((seconds - seconds % 60) / 60) % 60).toString(); 
  var hrs = ((((seconds - seconds % 60) / 60) - min) / 60).toString();
  function addZero (dig) {
     if ( dig.length == 1) {
         dig = "0" + dig;
         return dig;
     }  else {
         return dig
     }
  }
return addZero(hrs) + ":" + addZero(min) + ":" + addZero(sec);  
}
