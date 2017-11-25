const sumNested = arr => {
  var a = JSON.stringify(arr);
  a = a.match(/\d+/g);
  if(!a) {return 0;}
  if(a.length === 1) {return parseInt(a[0]);}
  return a.reduce((b,c)=> parseInt(b) + parseInt(c));
};
