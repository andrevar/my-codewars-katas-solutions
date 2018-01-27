function range(start, edge, step) {
    if (step > edge-start) {return [];}
    var arr = [];
    for (var x = start; x < edge; x += step) {
        arr.push(x);
    }
    return arr;
}
