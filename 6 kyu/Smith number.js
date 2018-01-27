function sum(n) {
    return n.split('').reduce((a,b)=>parseInt(a)+parseInt(b));
}
function prime(n) {
    if(n == 2) {return true;}
    if(n % 2 == 0) {return false;}
    var x = 3;
    var N = Math.sqrt(n);
    while(x <= N) {
        if (n % x == 0) {
            return false;
        }
        x += 2;
    }
    return true;
}
function isSmithNumber(n){
    if(n < 1) { return false;}
    if(prime(n)) {return false;}
    var num = n.toString();
    var fact = '';
    for(let x = 2; x <= n; x++) {
        while(n % x == 0) {
            fact += x;
            n /= x;
        }
    }
    console.log([sum(num) ,sum(fact)])
    return sum(num) == sum(fact);
}
