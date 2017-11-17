function sequence(n){
  var m = n+0;
  while(m%8 != 0) {
      m--;
  }
  switch (n-m) {
      case 1:
      case 5:
          return 0;
      case 2:
      case 3:
      case 0:
          return 1;
      case 4:
      case 6:
      case 7:
          return 2;
  }
}
