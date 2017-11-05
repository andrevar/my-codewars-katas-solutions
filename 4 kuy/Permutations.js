function permutations(string) {
    var arr = string.split('');
    var arrP = [];
    function generate(array, n) {
        n = n || array.length;
        if (n == 1) {
           arrP.push(array.join(''))
        } else {
            for (var i = 0; i < n - 1; i++) {
                generate(array, n - 1);
                if (n % 2 == 0) {
                    var tempA = array[n-1];
                    array[n-1] = array[i];
                    array[i] = tempA;
                    
                } else {
                    var tempB = array[n-1];
                    array[n-1] = array[0];
                    array[0] = tempB;
                   
                }
        }
         generate(array, n - 1);
         arrP.push(array.join(''));
    }
}
    generate(arr);
    

  
  return arrP.filter(function (value, index) { 
    return arrP.indexOf(value) === index;
});
}
