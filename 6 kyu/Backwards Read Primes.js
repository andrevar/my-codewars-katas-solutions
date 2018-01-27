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

function backwardsPrime(start, stop){
    var arr = [];
    for(var x = start; x <= stop; x++) {
        if(primeTest(x)) {
            if(arr.includes(x)) {
                continue;
            }
            let temp = parseInt(x.toString().split('').reverse().join(''))
            if (temp != x && primeTest(temp)) {
                arr.push(x);
                arr.push(temp);
            }
        }    
    }
    return arr.filter(a=> a >= start && a <= stop).sort((b,c)=>b-c);
}
