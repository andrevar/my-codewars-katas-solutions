function spinWords(){
  //TODO Have fun :)
   var arr = [];
   arr = arguments[0].split(' ');
   for (var x = 0; x < arr.length; x++){
       if (arr[x].length > 4) {
           var temp = arr[x];
           temp = temp.split('');
           temp = temp.reverse();
           temp = temp.join('');
           arr[x] = temp;
       } else {
        continue;
       }
   }
   arr = arr.join(' ');
   
   return arr;
}
