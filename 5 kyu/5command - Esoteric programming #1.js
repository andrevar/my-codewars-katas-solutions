class FiveCommands {
  constructor() {
  }
  
  read(input, debug){
      var arr = [0];
      var str = '';
      var i = 0;
      var p = 0;
      while (i < input.length) {
          if (input[i] == '+') {
              p++;
              if (p == arr.length) {
                  arr.push(0);
              }
          } else if (input[i] == '-') {
              if (p == 0) {
                  arr.unshift(0);
              } else {
                  p--;
              }
          } else if (input[i] == '^') {
              arr[p]++;
          } else if (input[i] == 'v') {
              arr[p]--;
          } else if (input[i] == '*') {
              str += arr[p];
          }
          i++;
      }
      return {'output':str, 'debug':debug? arr.map((a,b)=> b + '->' + a):[]}
  }
  
}
