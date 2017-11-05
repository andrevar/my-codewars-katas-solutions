function toCamelCase(str){
var arr = str.split(/_|-/g)
for (var x = 1; x < arr.length; x++) {
    arr[x] = arr[x].split('');
    arr[x][0] = arr[x][0].toUpperCase();
    arr[x] = arr[x].join('');
}
return arr.join('');
}
