function factorial(n){
  // Add some code
    var str = '1';
    function multiply(a, b) {
    if(a == '0' || b == '0') {
        return '0';
    }
    if (a.length > b.length) {
        for (var x = 0; x < a.length - b.length; x++) {
            b = '0' + b;
        }
    } else if (a.length < b.length) {
        for (var y = 0; y < b.length - a.length; y++) {
            a = '0' + a;
        }
    }
    a = a.split('').reverse();
    b = b.split('').reverse();
    var arr = [];
    for (var i = 0; i < a.length; i++) {
        for (var z = 0; z < b.length; z++) {
            if(!arr[i + z]) {
                arr[i + z] = 0
            }
            arr[i + z] += parseInt(a[i]) * parseInt(b[z]);
        }
    }
    arr.push(0);
    arr = arr.map(function(a , index) {
        arr[index + 1] += parseInt(a / 10);
        a = a % 10;
        return a;
    })
    arr = arr.reverse();
    while(arr[0] == 0) {
        arr.shift();
    }
return arr.join('');
} 
    for (var x = 2; x <= n; x++) {
        let temp = multiply(str, x.toString());
        str = temp;
    }
    return str;
}
