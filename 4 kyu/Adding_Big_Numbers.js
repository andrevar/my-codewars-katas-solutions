function add(a, b) {
  var arrA = a.split('').reverse();
    var arrB = b.split('').reverse();
    function sumStr(x, y) {
    var arrX = [];
    var arrY = [];
    if (x.length > y.length) {
        while(x.length > y.length) {
            y.push("0");
           }
        } else if(x.length < y.length){
        x.push("0");
    }
    for (var i = 0; i < x.length; i++) {
        if (parseInt(x[i]) + parseInt(y[i]) > 9) {
            let temp = (parseInt(x[i]) + parseInt(y[i])) % 10
            arrX.push( temp.toString() );
            arrY.push("1");
        } else {
            arrX.push((parseInt(x[i]) + parseInt(y[i])).toString());
            arrY.push("0")
        }
     }
    arrY.unshift("0");
    if (arrY.every(function(a) { return a == "0";})) {
        return arrX;
    } else {
    return sumStr(arrX, arrY);
    }
    }
    var p = sumStr(arrA, arrB);
    for (var z = p.length - 1; z > 0; z--) {
        if(p[z] == "0"){
            p.pop();
        } else if(p[z] != "0") {
            break;
        }
     }
    return p.reverse().join('');
  
  
  return Number(a) + Number(b); // Fix this!
}
