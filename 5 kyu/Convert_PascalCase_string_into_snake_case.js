function toUnderscore(string) {
  if (typeof string != 'string') {
      string = string.toString();
  }
  return string.split('').map((a,i)=> {
      if (a.match(/[A-Z]/) && i!=0) {
          return '_' + a.toLowerCase();
      }
      return a.toLowerCase();
  }).join('');
}
