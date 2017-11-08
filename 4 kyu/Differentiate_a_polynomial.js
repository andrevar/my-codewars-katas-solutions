function differentiate(equation, point){
  var arr = equation.match(/([-])?([0-9]+)?x(\^([0-9]+))?/g);
  var result = [];
  var sum = 0;
  for (let x = 0; x < arr.length; x++) {
      arr[x] = arr[x].replace('x^',' ');
      arr[x] = arr[x].replace('x',' 1');
  }
  for (let y = 0; y < arr.length; y++) {
      let temp = arr[y].split(' ');
      if(temp[0].length == 0) {
          temp[0] = '1'
      }
      if(temp[0].length == 1 && temp[0] == '-') {
          temp[0] = '-1'
      }
      temp = [parseInt(temp[0])*parseInt(temp[1]), parseInt(temp[1]) - 1];
      result.push(temp);
  }
  for (let i = 0; i < result.length; i++) {
      result[i] = result[i][0]*Math.pow(point,result[i][1]);
  }
  sum += result[0]
  for (var j = 1; j < result.length; j++) {
          sum += result[j];
  }
  return sum;
}
