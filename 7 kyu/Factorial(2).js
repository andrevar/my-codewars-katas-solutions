function factorial(n) {
  if (n < 0 || n > 12) {
     throw new RangeError('n must be between 0 and 12'); 
  }
  return n? n*factorial(n-1):1;
}
