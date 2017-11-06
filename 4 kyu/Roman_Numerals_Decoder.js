function solution(roman){
  // complete the solution by transforming the 
  // string roman numeral into an integer
  var regex = /^(M{0,4})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/g ;
  var numb = roman.split(regex).filter(function(a) {
      return a != "";
  });
  var romanList = {"M": 1000, "CM": 900,"DCCC": 800, "DCC": 700 ,
                   "DC": 600, "D": 500, "CD":400, "C": 100,
                   "XC": 90, "LXXX": 80, "LXX": 70, "LX": 60, "L": 50,
                   "XL": 40, "X":10, "IX": 9,"VIII": 8,
                   "VII": 7, "VI": 6, "V": 5, "IV": 4, "I": 1 } 
  
  var sum = 0;
    for (var x = 0; x < numb.length; x++) {
      if (numb[x].charAt(0) == numb[x].charAt(1)) {
         sum += romanList[numb[x].charAt(0)] * numb[x].length;
      } else {
         sum += romanList[numb[x]];
      }
  }
  
  
  return sum;
}
