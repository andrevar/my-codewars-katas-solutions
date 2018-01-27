function magicSquare(arr){
    console.log(arr)
    var sum = [];
    if(arr.length < 3) {
        return false;
    }
    var t = 0;
    var d = 0;
    for(let i = 0; i < arr.length; i++) {
        t += arr[i][i];
    }
    for(let i = arr.length - 1; i >= 0; i--) {
        d += arr[i][i];
    }
    sum.push(d);
    sum.push(t);
    for(let x = 0; x < arr.length; x++) {
        let temp = 0;
        for(let y = 0; y < arr.length; y++) {
            temp += arr[y][x];
        }
        sum.push(temp)
        sum.push(arr[x].reduce((a,b)=>a+b));
    }
    return [...new Set(sum)].length == 1;
}
