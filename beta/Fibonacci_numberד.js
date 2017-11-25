function Fibonacci(n) {
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
   return fibo(n); 
}
