snail = function(array) {
  // enjoy
    var arr = [];
        while(array.length) {
            arr.push(array.shift());
            for (var x = 0; x < array.length; x++) {
                arr.push(array[x].pop());
            }
            var a = array.pop() || [];
            arr.push(a.reverse());
            for (var y = array.length - 1; y >= 0; y--) {
                arr.push(array[y].shift());
            }
        }
     return arr.reduce(function(a, b) {
         return a.concat(b);
     });   
}
