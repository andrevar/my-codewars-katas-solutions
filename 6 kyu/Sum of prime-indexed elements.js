function prime(n) {
    if(n == 2) {
        return true;
    }
    if(n%2 == 0 || n < 2) {
        return false;
    }
    var N = Math.sqrt(n);
    var m = 3;
    while (m <= N) {
        if(n % m == 0) {
            return false;
        }
        m += 2;
    }
    return true;
}
function total(arr){
    var sum = 0;
    for(let x = 0; x < arr.length; x++) {
        if (prime(x)) {
            sum += arr[x]
        }
    }    
    return sum;
};
