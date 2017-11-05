function loop_size(node){
  var a = node;
  var b = node.next;
  var c = 0;
  while (a != b) {
    a = a.next;
    b = b.next.next;
  }
  c++;
  a = a.next;
  while (a != b) {
    a = a.next;
    c++;
  }
  return c;
