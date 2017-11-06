var recoverSecret = function(triplets) {
    var obj = {};
    var arr = triplets.reduce(function(a, b) {
        return a.concat(b);
    }).filter(function(a) {
        obj[a] = (obj[a] || 0) + 1;
        return obj[a] == 1;
    });
    function arrange (a, t) {
        var array = a.slice(0);
        for (var x = 0; x < t.length; x++) {
            for (var y = 1; y < t[x].length; y++) {
                if (a.indexOf(triplets[x][y - 1]) > array.indexOf(t[x][y])) {
                    var temp = array[array.indexOf(t[x][y - 1])];
                    array[array.indexOf(t[x][y - 1])] = array[array.indexOf(t[x][y])];
                    array[array.indexOf(t[x][y])] = temp;
                }
            }
        } 
        if (array.join('') == a.join('')) {
            return array;
        } else {
            return arrange (array, t);
        }
    }
    return arrange(arr, triplets).join('');
}
