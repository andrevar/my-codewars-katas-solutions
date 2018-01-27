function digitsAverage(input) {
    var num = input.toString();
    if (num.length == 1){
        return input;
    }
    var s = '';
    for (let i = 0; i < num.length - 1; i++) {
        s += Math.round((parseInt(num[i]) + parseInt(num[i+1]))/2)
    }
    return digitsAverage(parseInt(s));
}
