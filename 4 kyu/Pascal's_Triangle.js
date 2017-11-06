function pascalsTriangle(n) {
  //return a flat array representing the values of Pascal's Triangle to the n-th level
    function factorial (f) {
       if(f == 0 || f == 1) {
           return 1;
       } 
       return f * factorial(f - 1);
    }
    var arr = [];
    for (var x = 0; x < n; x++) {
        for (var y = 0; y < x + 1; y++) {
            arr.push(Math.round((factorial(x)/(factorial(y) * factorial(x - y)))));
        }
    }

    return arr;
}
