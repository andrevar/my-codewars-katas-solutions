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
function brainLuck(code, input){
    var codePointer = 0;
    var memoryPointer = 0;
    var str = "";
    var memory = [0];
    code = code.split('')
    while(true) {
       if(memoryPointer == -1) {
            memory.unshift(0);
            memoryPointer++;
        }        
        if(codePointer >= code.length) {
            return str;
        }
        if (code[codePointer] == "+") {
            if (memory[memoryPointer] == 255) {
              memory[memoryPointer] = 0;
            } else {
              memory[memoryPointer]++;
            }
        }  
        if (code[codePointer] == "-") {
            if (memory[memoryPointer] == 0) {
                memory[memoryPointer] = 255;
            } else {
              memory[memoryPointer]--;
            }    
        } else if (code[codePointer] == ".") {
            str += String.fromCharCode(memory[memoryPointer]);
        } else if (code[codePointer] == '>') {
            memoryPointer++;
            if(memoryPointer >= memory.length) {
               memory.push(0);
            }
        } else if (code[codePointer] == '<') {
            memoryPointer--;
        } else if (code[codePointer] == ','){
            memory[memoryPointer] = input.charCodeAt(0);
            input = input.slice(1);
        } else if(code[codePointer] == '[') {
            if (memory[memoryPointer] == 0) {
                codePointer = checkBracketL(code,codePointer);
            }
        } else if(code[codePointer] == ']') {
            if (memory[memoryPointer] != 0) {
                codePointer = checkBracketR(code,codePointer);
            }
        }
        codePointer++;
    }
    return str;
}
