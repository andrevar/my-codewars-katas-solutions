function solution(list){
 // TODO: complete solution
    var arr = [];
    var arr2 = [];
    for (var x = 0; x < list.length -1; x++) {
        arr.push(list[x + 1] - list[x]);
    }
    arr.push(0);
    var count = 0;
    for (var y = 0; y < arr.length; y++) {
        if(arr[y] == 1) {
            count++;
        } else if (count < 2) {
            if (count == 0){
            arr2.push(list[y]);
            } else {
            arr2.push(list[y - 1]);
            arr2.push(list[y]);
            count = 0;
            }
        } else {
            arr2.push(list[y - count] + "-" + list[y]);
            count = 0;
        }
    }
    
    return arr2.join(',');
}
