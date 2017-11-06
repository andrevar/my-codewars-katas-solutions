function transpose(matrix) {
    var y = matrix.length;
    var x = matrix[0].length;
    if(x == 1 && y == 1) {
         return matrix;
    }
    var arr = [];
    for (var j = 0; j < x; j++) {
        var temp = [];
        for (var i = 0; i < y; i++) {
            temp.push(matrix[i][j]);
        }
        arr.push(temp);
    }
    return arr;
}
