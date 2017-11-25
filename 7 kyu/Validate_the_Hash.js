function malwareValidate(hashArr) {
    var arr = [];
    for (var x = 0; x < hashArr.length; x++) {
        if(hashArr[x].match(/\d.*\d.*\d.*\d.*\d/g)
           && hashArr[x].match(/[a-z].*[a-z].*[a-z].*[a-z].*[a-z]/g)) {
               arr.push(hashArr[x]);
           }
    }
    arr =  [...new Set(arr)]
    return arr.filter((a,i)=> a.length == 10);
}
