function separateLiquids(glass) {
  if(!glass[0]) {
      return glass;
  }
  const size = glass[0].length;
  var arr = [];
  var density = {'O': 0, 'A' : 1, 'W': 2, 'H': 3};
  glass = glass.reduce((a, b) => a.concat(b)).sort((i, j)=> density[i] - density[j]);
  if(glass.length == size) {
      return [glass];
  }
  for(let x = 0; x < glass.length; x += size) {
      let temp = [];
      for(let y = x + 0; y < x + size; y++) {
          temp.push(glass[y]);    
      }
      arr.push(temp);
  }
  return arr;
}
