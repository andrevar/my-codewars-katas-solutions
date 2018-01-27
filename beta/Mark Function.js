var arr = [];
function mark (n) {
    arr.push(n);        
}
function markEnd () {
    return arr.length ? arr.pop():null;
}
