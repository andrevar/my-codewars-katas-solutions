function parseInt(string) {
  // TODO: it's your task now
  if (string == "one million") {
      return 1000000;
  }
  var num = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
              'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
              'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13,
              'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17,
              'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30,
              'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy':70, 'eighty': 80,
              'ninety': 90, 'hundred': 100, 'thousand': 1000, 'million': 1000000}
  string = string.replace(' and ', ' ');
  var arr = string.split(' '); 
  var sum = 0;
  var partialSum = 0;
  for (var x = 0; x < arr.length; x++) {
      if(arr[x] in num) {
          if (arr[x] == "hundred") {
              partialSum *= num[arr[x]];
          } else if (arr[x] == 'thousand') {
              partialSum *= num[arr[x]];
              sum += partialSum;
              partialSum = 0;
          } else {
              partialSum += num[arr[x]];
          }
      } else {
          arr[x] = arr[x].split("-");
          partialSum += num[arr[x][0]] + num[arr[x][1]];
      }
      
  }
  return sum += partialSum
  
}
