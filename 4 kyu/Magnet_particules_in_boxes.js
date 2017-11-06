function doubles(maxk, maxn) {
    // your code
    var sum = 0;
    for (var x = 1; x <= maxk; x++) {
        var temp = 0;
        for (var y = 1; y <= maxn; y++) {
            temp += 1 /( x * Math.pow((y + 1), x * 2))
        }
        sum += temp;
    }
    return sum;
}
