function fact(n) {
    return n == 0? 1 : n*fact(n-1);
}
function factorial(n) {
    if (n < 0) {
        return n % 2 == 0? fact(-n): -1 * fact(-n)
    }
    return fact(n);
}
