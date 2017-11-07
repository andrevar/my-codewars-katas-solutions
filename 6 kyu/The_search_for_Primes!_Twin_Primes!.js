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
function twinPrime(n) {
    let count = 0;
    for (let x = 1; x <= n - 1; x++) {
        if(primeTest(x) && primeTest(x + 2)){
            count++;
        }
    }
    return count;  
}
