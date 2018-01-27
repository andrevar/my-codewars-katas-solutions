function smallestDiff(arr1, arr2) {
    if(!arr1.length && !arr2.length) { return -1;}
    if(!arr1.length) {return arr2.sort((a,b)=>a-b)[0];}
    if(!arr2.length) {return arr1.sort((a,b)=>a-b)[0];}
    var arr = [];
    for(let x of arr1) {
        for(let y of arr2) {
            if ((x-y) < 0) {
                arr.push(y-x);
            } else {
                arr.push(x-y);
            }
        }
    }
    return arr.sort((a,b)=>a-b)[0];
}
