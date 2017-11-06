function orderWeight(strng) {
    // your code
    var arr2 = [];
    var arr = strng.split(' ');
    function weight (val) {
        val = val.split('');
        val = val.map(function(c) {
            return c = parseInt(c);
        }).reduce(function (d, e) {
            return d + e;
        });
        return val;
    }
    
    arr = arr.sort(function (f, g) {
        if (weight(f) == weight(g)){
          if (f < g) {
            return -1;
          } else {
              return 1;
            }
        } else if (weight(f) < weight(g)) {
            return -1;
        }
        return 1;
    });
    
    return arr.join(' ');
}
