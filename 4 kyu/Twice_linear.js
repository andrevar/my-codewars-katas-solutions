function dblLinear(n) {
    var num = 1;
    var arr2 = [],arr3 = [];
    for (var x = 0; x < n; x++) {
        arr2.push(num * 2 + 1);
        arr3.push(num * 3 + 1);
        num = Math.min(arr2[0],arr3[0]);
        if (num == arr2[0]) {
            arr2.shift();
        }
        if (num == arr3[0]) {
            arr3.shift();
        }
    }
    return num;
}
