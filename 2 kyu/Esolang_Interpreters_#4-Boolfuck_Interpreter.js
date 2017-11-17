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
function boolfuck(code, input = "") {

  var memory = [0];
  var m_pt = 0;
  var pt = 0;
  var output = '';
  if (input != '') {
      input = input.split('').map(a=> a.charCodeAt().toString(2)).map(b=> {
      while(b.length < 8) { b = '0' + b; } return b; 
      }).map(c=> c.split('').reverse().join('')).join('').split('') }
  var i_pt = 0;
  while(true) {
    if(pt >= code.length) {
        break;
    }
    var cmd = code[pt];
    if (cmd == '+') {
        if(memory[m_pt] == 0) {
            memory[m_pt] = 1;
        } else {
            memory[m_pt] = 0;}
    } else if (cmd == ',') {
        memory[m_pt] = input[i_pt++] === undefined? 0: parseInt(input[i_pt-1]);
        
    } else if (cmd == ';') {
        output += memory[m_pt];
    } else if (cmd == '<') {
        m_pt--;
        if (m_pt < 0) {
        memory.unshift(0);
        m_pt++;
        }
    } else if (cmd == '>') {
        m_pt++;
        if (m_pt >= memory.length) {
        memory.push(0);
        }
    } else if (cmd == '[') {
            if(memory[m_pt] == 0) {
                pt = checkBracketL(code,pt);
            }
    } else if (cmd == ']') {
            if(memory[m_pt] == 1) {
                pt = checkBracketR(code,pt);
            }
    }
    pt++;
  }
  while(output.length % 8 != 0) {
      output += '0';
  }
  var out = '';
  for (var x = 0; x < output.length; x+=8) {
      let temp = output.slice(x,x+8).split('').reverse().join('');
      out += String.fromCharCode(parseInt(temp, 2));
  }
  return out;
}
