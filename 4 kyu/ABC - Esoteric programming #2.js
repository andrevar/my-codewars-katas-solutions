class Interpreter {
  constructor() { }
  
  read(input){
      var ascii = false;
      var pt = 0;
      var arr = [];
      var acc = 0;
      var str = '';
      while (pt < input.length) {
          if(input[pt] == 'a') {
              acc++;    
          } else if(input[pt] == 'b') {
              acc--;    
          } else if(input[pt] == 'c') {
              if(ascii) {
                  str += String.fromCharCode(acc)
              } else {
                  str+=acc;    
              }    
          } else if(input[pt] == 'd') {
              acc *= -1;    
          } else if(input[pt] == 'r') {
              acc = Math.floor(Math.random()*(acc+1))   
          } else if(input[pt] == 'n') {
              acc = 0;    
          } else if(input[pt] == '$') {
              ascii = ascii == false? true: false;    
          } else if(input[pt] == 'l') {
              input = input.replace('l','');
              pt = 0;
              continue;
          } else if(input[pt] == ';') {
              arr.push(acc);    
          }
          pt++;
      }
      return {'output':str,'debug':arr.map(a=>a.toString()+'->'+ String.fromCharCode(a))};
  }
}
