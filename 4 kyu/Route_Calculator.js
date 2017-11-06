function calculate(sum){
  if(!!sum.match(/[^0-9.+$*-]/g)) {
      return '400: Bad request';
  }
  sum = sum.split('$').join(' / ').split('+').join(' + ').
        split('-').join(' - ').split('*').join(' * ').split(' ');
  for(var x = 0; x < sum.length; x++) {
      var temp;
      if(sum[x] == '*') {
          temp = sum.splice(x - 1,3);
          temp = Number(temp[0]) * Number(temp[2]);
          sum.splice(x - 1,0, temp.toString());
          x--;
      }
      if(sum[x] == '/') {
          temp = sum.splice(x - 1,3);
          temp = Number(temp[0]) / Number(temp[2]);
          sum.splice(x - 1,0, temp.toString());
          x--;
      }
  }
    for(var x = 0; x < sum.length; x++) {
      var temp;
      if(sum[x] == '+') {
          temp = sum.splice(x - 1,3);
          temp = Number(temp[0]) + Number(temp[2]);
          sum.splice(x - 1,0, temp.toString());
          x--;
      }
      if(sum[x] == '-') {
          temp = sum.splice(x - 1,3);
          temp = Number(temp[0]) - Number(temp[2]);
          sum.splice(x - 1,0, temp.toString());
          x--;
      }
  }      
  return Number(sum[0]);
}
