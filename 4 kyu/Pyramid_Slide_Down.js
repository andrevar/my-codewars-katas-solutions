function longestSlideDown (pyramid) {
    for (var j = pyramid.length - 1; j > 0; j--) {
        var temp = [];
        for (var i = 1; i < pyramid.length - 1; i++) {
            temp.push(Math.max(pyramid[j][i -1],pyramid[j][i]));
        }
        for (var x = 0; x < temp.length; x++) {
            pyramid[j - 1][x] += temp[x]
        }    
    }
    return pyramid[0][0]
}
