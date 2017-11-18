function possibilities(str) {
    var arr = [str];
    for (var i of arr) {
        if(i.match(/\?/)) {
            let temp1 = i.replace(/\?/,'0');
            let temp2 = i.replace(/\?/,'1');
            arr.push(temp1);
            arr.push(temp2);
        }
    }
    return arr.filter(a=> !a.match(/\?/));
};
