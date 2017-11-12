function checkBracketL(string,index) {
    for(var x = index; x < string.length - 1; x++) {
        let bCount = 0;
        if(string[x] == '['){
            for(var y = x + 1; y < string.length; y++) {
                if(string[y] == '[') {
                    bCount++;
                }
                if(string[y] == ']') {
                    if(bCount === 0) {
                        return y;
                    } else {
                        bCount--;
                    }
                    
                }
                
            }    
            
        }
    }
    
    return -1;
}
function checkBracketR(string,index) {
    for(var x = index; x > 0; x--) {
        let bCount = 0;
        if(string[x] == ']'){
            for(var y = x - 1; y >= 0; y--) {
                if(string[y] == ']') {
                    bCount++;
                }
                if(string[y] == '[') {
                    if(bCount === 0) {
                        return y;
                    } else {
                        bCount--;
                    }
                    
                }
                
            }    
            
        }
    }
    
    return -1;
}
function interpreter(code, tape) {
  var codePos = 0;
  var tapePos = 0;
  tape = tape.split('')
  while(true) {
      if(tapePos < 0 ||tapePos >= tape.length) {
          return tape.join('');
      }
      if(codePos < 0 || codePos >= code.length) {
          return tape.join('');
      }
      switch(code[codePos]){
          case '>':
              tapePos++;
              break;
          case '<':
              tapePos--;
              break;
          case '*':
              tape[tapePos] = (tape[tapePos] == '1'?'0':'1');
              break;
          case '[':
              if(tape[tapePos] == '0'){
                  codePos = checkBracketL(code,codePos);    
              }
              break;
           case ']':
              if(tape[tapePos] != '0'){
                  codePos = checkBracketR(code,codePos);    
              }
              break;   
      }
      codePos++;
      
  }
  
  return tape.join('');
}
