function add (x, y) {
	while (y != 0) {
      var temp = x & y;
      x = x ^ y;
      y = temp << 1;
  }
  return x;
}
