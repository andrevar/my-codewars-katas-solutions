function primeFactors(n){
    //your code here
    var factors = [], i;
    var obj = {};
    var str = "";
        for (i = 2; i <= n; i++) {
            var count = 0;
            while ((n % i) === 0) {
                factors.push(i);
                count++;
                obj[i] = count;
                n /= i;
            }
        }
    var arr = Object.keys(obj);
    for (var x = 0; x < arr.length; x++) {
        if (obj[arr[x]] == "1") {
            str += "(" + arr[x] + ")";
        } else {
        str += "(" + arr[x] + "**" + obj[arr[x]] + ")";
        }
    }
        
        return str;
    
}
