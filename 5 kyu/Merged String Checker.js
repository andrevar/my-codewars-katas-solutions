function check(s,part1, part2) {
    var x = 0;
    var y = 0;
    for(let i = 0; i < part1.length; i++) {
        if(s[i] == part1[i]) {
            x++;
        }
    }
    for(let i = 0; i < part2.length; i++) {
        if(s[i] == part2[i]) {
            y++;
        }
    }
    return x >= y;
}
function isMerge(s, part1, part2) {
  var i1 = 0;
  var i2 = 0;
  var res = '';
  for (let x = 0; x < s.length; x++) {
      if(s[x] == part1[i1] && s[x] == part2[i2]) {
           if (!check(s.slice(x),part1.slice(i1), part2.slice(i2))) {
               let temp = part1;
               part1 = part2;
               part2 = temp;
               let temp2 = i1;
               i1 = i2;
               i2 = temp2;
           }  
      } 
      if(s[x] == part1[i1]) {
          i1++;
      } else if (s[x] == part2[i2]) {
          i2++;
      } else {
          return false;
      }
  }
  return i1 == part1.length && i2 == part2.length;
}
