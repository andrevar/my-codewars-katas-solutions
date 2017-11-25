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
function sumFibs(n) {
	var sum = 0;
  for (var i = 3; i <= n; i++) {
      let t = fibonacci(i);
      if (t % 2 === 0) {
          sum+= t;
      }
  }
  return sum;
};
