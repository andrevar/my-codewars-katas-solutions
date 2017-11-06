function isValidWalk(walk) {
  //insert brilliant code here
  if (walk.length != 10) {
      return false;
  }
  var nS = 0;
  var eW = 0;
  for (var x = 0; x < walk.length; x++) {
      switch (walk[x]) {
          case "n":
          nS += 1;
          break;
          case "s":
          nS -= 1;
          break;
          case "e":
          eW += 1;
          break;
          case "w":
          eW -= 1;
          break;
      }
  }
  if (nS + eW == 0) {
      return true;
  } else {
      return false;
  }
  
}
