function solution(input, markers){
  var arr = input.split('\n');
  for (var x = 0; x < markers.length; x++) {
      for (var y = 0; y < arr.length; y++) {
          var i = arr[y].indexOf(markers[x]);
          if(i != -1){
          arr[y] = arr[y].substring(0, i).trim();
      }}
  }
  return arr.join("\n");
}
