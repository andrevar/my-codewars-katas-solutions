function anagrams(word, words) {
  var arr = [];
  function sort(str) {
      return str.split('').sort().join('');
  }  
  for (var x = 0; x < words.length; x++) {
      if (sort(word) == sort(words[x])) {
          arr.push(words[x]);
      }
  }  

return arr;
}
