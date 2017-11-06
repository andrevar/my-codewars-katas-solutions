function validParentheses(parens){
  //TODO 
 function filt(a) {
     if (a.includes("()")) {
       a = a.replace("()", "");
       return filt(a);
     } else if (a.length == 0){
         return true;
       } else {
         return false;
       }   
  }
 
  return filt(parens);
  }
