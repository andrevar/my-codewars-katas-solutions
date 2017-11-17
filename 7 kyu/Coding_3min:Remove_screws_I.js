function sc(screws){
  return screws.match(/(?=(\+-|-\+))/g).length*5+screws.length*2-1;
}
