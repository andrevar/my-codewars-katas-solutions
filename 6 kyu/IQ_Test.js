function iqTest(numbers){
  // ...
  var odd = 0;
  var even = 0;
  var arr = numbers.split(' ');
  for (var x = 0; x < arr.length; x++) {
     if (arr[x] % 2 == 0){
     arr[x] = "even";
     even++;
  } else {
    arr[x] = "odd";
    odd++;
  }}
  if (odd < even){
      return arr.indexOf("odd") + 1;
  } else {
      return arr.indexOf("even") + 1;
  }
}
