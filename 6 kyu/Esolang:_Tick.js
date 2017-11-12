function interpreter(tape) {
  
  var tapePointer = 0;
  var memoryPointer = 0;
  var str = "";
  var memory = [0];
  tape = tape.split('')
  while(true) {
      if(memoryPointer == -1) {
              memory.unshift(0);
              memoryPointer++;
      }        
      if(tapePointer >= tape.length) {
          return str;
      }
      if (tape[tapePointer] == "+") {
          if (memory[memoryPointer] == 255) {
              memory[memoryPointer] = 0;
          } else {
              memory[memoryPointer]++;
          }
      } else if (tape[tapePointer] == "*") {
          str += String.fromCharCode(memory[memoryPointer]);
          
      } else if (tape[tapePointer] == '>') {
          memoryPointer++;
          if(memoryPointer >= memory.length) {
              memory.push(0);
          }

      } else if (tape[tapePointer] == '<') {
              memoryPointer--;
      }
      tapePointer++;
  }
  
  return str;
}
