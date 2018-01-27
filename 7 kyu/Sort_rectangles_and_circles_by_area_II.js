function sortByArea(array) {
    var arr = [];
    var res = [];
    for(var x = 0; x < array.length; x++) {
        if(Array.isArray(array[x])) {
            arr.push([array[x][0]*array[x][1],x]);
        } else {
            arr.push([array[x]*array[x]*Math.PI,x]);
        }
    }
    arr = arr.sort((a,b)=>a[0]-b[0]);
    for (var y = 0; y < arr.length; y++) {
        res.push(array[arr[y][1]]);
    }
    return res;
}
