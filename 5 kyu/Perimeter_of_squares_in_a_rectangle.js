var fibonacci = function(m) {
    var cache = {};
function fibo (n){
    var fib;
    if(n==0 || n == 1) {
        fib = n;
    } else if (n in cache) {
        fib = cache[n];  
    } else {
        fib = fibo(n-1) + fibo(n-2);
        cache[n] = fib;
        
    }
    return fib;
}
   return fibo(m); 
}

function perimeter(n) {
    var sum = 0;
    for (var i = 1; i <= n + 1; i++){
        sum += fibonacci(i);
    }
    return sum * 4;
}
