function permutationArr(num) { 
  var arr = (num + '').split(''),
  permutations = [];   
  function swap(a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
  function generate(n) {
    if (n == 1) {
      permutations.push(arr.join(''));
      let temp = arr.join('');
      for(var x =0; x < temp.length; x++) {
          permutations.push(temp.slice(x));
      }
    } else {
      for (var i = 0; i != n; ++i) {
        generate(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  }
  generate(arr.length);
  return [...new Set(permutations.map(c=>parseInt(c)).filter(d=>d%3===0).sort((a,b)=>b-a))];
}

function findMult_3(num){
    var n = permutationArr(num);
    if(n[n.length - 1]== 0) {
        n.pop();
    }
    return [n.length,n[0]];
}
