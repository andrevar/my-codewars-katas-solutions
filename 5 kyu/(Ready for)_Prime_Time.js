function primeTest(n) {
    if(n == 2 || n == 3) {
        return true;
    }
    if(n % 2 == 0 || n % 3 == 0 || n < 2) {
        return false;
    }
    var x = 5;
    var N = Math.sqrt(n);
    while (x <= N) {
        if (n % x == 0) {
            return false;
        }
        x++;
    }
    return true;
}
function prime(num) {
    var arr = [];
    for (var i = 2; i <= num;i++) {
        if (primeTest(i)) {
            arr.push(i);
        }
    } 
    return arr;
}
