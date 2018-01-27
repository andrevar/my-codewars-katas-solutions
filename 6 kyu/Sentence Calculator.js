function lettersToNumbers(s) {
     var sum = 0;
     for(let x = 0; x < s.length; x++) {
         if(s[x].match(/[a-z]/)) {
             sum += s.charCodeAt(x) - 96;
         } else if (s[x].match(/[A-Z]/)) {
             sum += (s.charCodeAt(x) - 64)*2;
         } else if (s[x].match(/\d/)) {
             sum += parseInt(s[x]);
         }
     }
     return sum;
 }
