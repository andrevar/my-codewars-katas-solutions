function checkPrime(n){
    if (n == 2 || n == 3) {
        return true;
    }
    if (n % 2 == 0 || n % 3 == 0 || n < 2) {
        return false;
    }
    var x = 5;
    var N = Math.sqrt(n);
    while(x <= N) {
        if(n % x == 0) {
            return false;
        }
        x++;
    }
    return true;
}
