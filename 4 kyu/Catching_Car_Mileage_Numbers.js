function dec(num) {
    num = num.toString().split('').map(function(a){
    return parseInt(a);});
    for (var x = 1; x < num.length; x++) {
        if(num[x - 1] - num[x] != 1 ) {
            return false;
        }
    }    
    return true;
}
function inc(num) {
    num = num.toString().split('').map(function(a){
    if (a == '0'){
        a = '10'
    }
    return parseInt(a);});
    for (var y = num.length - 2; y >= 0; y--) {
        if(num[y + 1] - num[y] != 1 ) {
            return false;
        }     
    }
    return true;
}

function int(number, awesomePhrases) {
    if(number % 100 == 0) {
      return true;
  } else if(number < 100) {
      return false;
  } else if(number.toString() == number.toString().split('').reverse().join('')){
      return true;
  } else if(dec(number) || inc(number)){
      return true;
  } else {
    for (var x = 0; x < awesomePhrases.length; x++) {
      if (number == awesomePhrases[x]) {
          return true;
      }
    }
    return false;
  }
  
}
function isInteresting(number, awesomePhrases) {
  // Go to town!
  if (!int(number, awesomePhrases)) {
       if (int(number + 1, awesomePhrases) || int(number + 2, awesomePhrases)) {
           return 1;
       }
       return 0;
   } 
  return 2;
}
