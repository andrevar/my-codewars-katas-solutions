// TODO: create a RomanNumerals helper object
var RomanNumerals = {

"fromRoman" : function (roman){
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
} ,


"toRoman" :function (number){
  // convert the number to a roman numeral
 var arrRom = [];
 var numString = number.toString();
 var numSplit = numString.split(''); 
 numSplit.reverse(); 
 switch(numSplit[0]){
  case "1":
  arrRom.push("I");
  break;
  case "2":
  arrRom.push("II");
  break;
  case "3":
  arrRom.push("III");
  break;
  case "4":
  arrRom.push("IV");
  break;
  case "5":
  arrRom.push("V");
  break;
  case "6":
  arrRom.push("VI");
  break;
  case "7":
  arrRom.push("VII");
  break;
  case "8":
  arrRom.push("VIII");
  break;
  case "9":
  arrRom.push("IX");
  break;
  default:
  break;
}
switch(numSplit[1]){
  case "1":
  arrRom.push("X");
  break;
  case "2":
  arrRom.push("XX");
  break;
  case "3":
  arrRom.push("XXX");
  break;
  case "4":
  arrRom.push("XL");
  break;
  case "5":
  arrRom.push("L");
  break;
  case "6":
  arrRom.push("LX");
  break;
  case "7":
  arrRom.push("LXX");
  break;
  case "8":
  arrRom.push("LXXX");
  break;
  case "9":
  arrRom.push("XC");
  break;
  default:
  break;
}
switch(numSplit[2]){
  case "1":
  arrRom.push("C");
  break;
  case "2":
  arrRom.push("CC");
  break;
  case "3":
  arrRom.push("CCC");
  break;
  case "4":
  arrRom.push("CD");
  break;
  case "5":
  arrRom.push("D");
  break;
  case "6":
  arrRom.push("DC");
  break;
  case "7":
  arrRom.push("DCC");
  break;
  case "8":
  arrRom.push("DCCC");
  break;
  case "9":
  arrRom.push("CM");
  break;
  default:
  break;
}
switch(numSplit[3]){
  case "1":
  arrRom.push("M");
  break;
  case "2":
  arrRom.push("MM");
  break;
  case "3":
  arrRom.push("MMM");
  break; 
  case "4":
  arrRom.push("MMMM");
  break;
  case "5":
  arrRom.push("MMMMM");
  break;
  case "6":
  arrRom.push("MMMMMM");
  break;
  case "7":
  arrRom.push("MMMMMMM");
  break;
  case "8":
  arrRom.push("MMMMMMMM");
  break;
  case "9":
  arrRom.push("MMMMMMMMM");
  break;
  default:
  break;
}
arrRom.reverse(); 
var romNum = arrRom.join('');  

  return romNum;
}
}
