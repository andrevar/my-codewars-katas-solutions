function cut(rope, arr) {
    var min = Math.min(...rope);
    rope = rope.sort((i, j)=> i - j).filter(x => x != min).map(y => y - min).
    filter(z=> z != 0);
    if (rope.length == 0) {
         return arr;
    }
    arr.push(rope.length);
    return cut(rope, arr);
}
function cutTheRopes(a) {
  var ropes = a.slice();
  var arr = [a.length];
  return cut(ropes, arr);
}
