var allowed = "0132456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -";
var arr = [];
function count(s,array) {
    var n = 0;
    for(let x of array) {
        if (x == s) {
            n++;
        }
    }
    return n;
}
function simunq(original) {
     for (let i = 0; i < original.length; i++) {
          if(!allowed.includes(original[i])) {
              original = original.replace(original[i],'-');
          }
     }
     arr.push(original);
     if(count(original, arr) > 1 && arr.includes(original)) {
         return original + '-' + count(original, arr);
     }
     return original;
}
simunq.reset = function() {
    arr = [];
};
