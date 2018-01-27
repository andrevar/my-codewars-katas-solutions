function hopAcross(lst) {
    var idx = 0;
    var count = 0;
    while(idx < lst.length) {
        idx += lst[idx]
        count++;
    }
    idx = lst.length-1;
    while(idx >= 0) {
        idx -= lst[idx]
        count++;
    }
    return count;
}
