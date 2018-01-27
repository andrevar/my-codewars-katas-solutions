function onlyDuplicates(str) {
  var cache = {};
  str.split('').map(a=>{ cache[a] = (cache[a] || 0) + 1;})
  return str.split('').filter(b=>cache[b] > 1).join('');
}
