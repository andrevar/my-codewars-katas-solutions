function listSquared(m, n) {
    // your code
    var arr = []
    for (var x = m; x <= n; x++) {
        var temp = 0;
        for (var y = 1; y <= x; y++) {
            if (x % y == 0) {
                temp += y*y;
            } 
        }
        if(Math.sqrt(temp) % 1 == 0) {
                arr.push([x, temp]);
            }
    }
    return arr;
}
