function sc(floor){
  if(floor < 2) {
      return '';
  }
  var str = '';
  for(let x = 0; x < floor - 1; x++) {
      str += 'Aa~ ';
  }
  if(floor > 6) {
      return str += 'Pa!';
  }
  return str + 'Pa! Aa!';
}
