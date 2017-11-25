function race(v1, v2, g) {
    if (v1>=v2) { return null; } 
    var h = parseInt((g / (v2 - v1))) % 60;
    var m = parseInt(60 * (g / (v2 - v1))) % 60; 
    var s = Math.floor(60*((60 * (g / (v2 - v1))) - m))%60;
    return [h,m,s];    
}
