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
function genfib(){
  var num = 1;
  return function fib(){
      num++;
      return fibonacci(num - 2);
  }
}
