const Interpreter = function() {
  var stack = [[],[],[]];
  var i = 0;
  return {
    read:function(input){
    console.log(input)
    var output = '';
    var p = 0;
    var bracket = null;
    while(true) {
        if(p == input.length) {
            break;
        }
        if(input[p] == '+') {
                if(stack[i].length == 0) {
                    stack[i].push(0);
                } else {
                    stack[i][stack[i].length - 1]++;    
                }    
        } else if(input[p] == '-') {
                if(stack[i].length == 0) {
                    stack[i].push(0);
                } else {
                    stack[i][stack[i].length - 1]--;
                }    
        } else if(input[p] == '<') {
            if(stack[i].length > 0) {
                let x = stack[i].pop();
                if(i == 0) {
                    stack[2].push(x);
                } else {
                    stack[i - 1].push(x);
                }
            }   
        } else if(input[p] == '>') {
            if(stack[i].length > 0) {
                let y = stack[i].pop();
                if(i == 2) {
                    stack[0].push(y);
                } else {
                    stack[i + 1].push(y);
                }
            }    
        } else if(input[p] == '*') {
            stack[i].push(0);
        } else if(input[p] == '^') {
            stack[i].pop();
        } else if(input[p] == '#') {
            i = (i + 1)%3;
        } else if(input[p] == ',') {
            let t = '';
            while(input[p+1].match(/\d/g)){
                p++;
                t += input[p]
                if (p+1 == input.length) {
                    break;
                }
            }
            stack[i].push(parseInt(t));
        } else if(input[p] == '.') {
            if(stack[i].length > 0) {
                output += stack[i][stack[i].length - 1].toString();
            }
        } else if(input[p] == '[') {
            bracket = p + 0;
        } else if(input[p] == ']' && stack[i][stack[i].length - 1] > 0) {
            p = bracket + 0;
        }
        p++;
    }
    return output;
    }
  };
}
