function sc(apple){
  for(let x = 0; x < apple.length; x++) {
      for(let y = 0; y < apple[0].length; y++) {
          if (apple[x][y] == 'B') {
              return [x, y];
          }
      }
  }
  return null;
}
