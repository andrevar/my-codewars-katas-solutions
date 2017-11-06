function gap(g, m, n) {
    // your code
    function primes(p) {
        if (p == 2) {
            return true;
        }   
        if (p % 2 != 0) {
            for (var i = 2; i <= p / 2; i++) {
			          if (p % i === 0) {
				            return false;
			          }
               
		        }
             return true;
        }
        return false;
    }
    var currVal = 0;
    for (var x = m; x < n; x++) {    
        if(primes(x)) {
            if(currVal === 0) {
                currVal = x;
            } else if (x - currVal == g) {
                return [currVal, x];
            } else {
                currVal = x;
            }
        }
    }
    return null;
}
