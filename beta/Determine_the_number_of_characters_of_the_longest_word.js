function findLongestWord(str) {
  return str.split(' ').sort((a,b)=>b.length-a.length)[0].length;
}

findLongestWord("Add a Bright Spot");
