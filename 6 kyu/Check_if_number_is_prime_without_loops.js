function prime(x,n,N) {
    if (x >= N) {
        return true;    
    }
    if (n % x == 0) {
        return false;
    } else {
        x++;
        return prime(x,n,N);
    }
}
function isPrime(n) {
    n = Math.abs(n);
    if(n == 2 || n == 3) {
        return true;
    }
    if(n % 2 == 0 || n % 3 == 0 || n < 2) {
        return false;
    }
    var x = 5;
    var N = Math.sqrt(n);
    return prime(x,n,N)
};
