function oddOrEven(array) {
   return !array.length || array.reduce((a,b)=>a+b) % 2 === 0? 'even': 'odd';
}
