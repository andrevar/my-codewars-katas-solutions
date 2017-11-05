function likes(names) {
  // TODO
 var likeList = "";
 var namesNum = names.length;
switch(namesNum){
    case 0:
    likeList = "no one likes this";
    break;
    case 1:
    likeList = names[0] + " likes this";
    break;
    case 2:
    likeList = names[0] + " and " + names[1] + " like this";
    break;
    case 3:
    likeList = names[0] + ", " + names[1] + " and " + names[2] + 
    " like this";
    break;
    default:
    var val = namesNum - 2;
    likeList = names[0] + ", " + names[1] + " and " + val +
    " others like this"
    }
  return likeList;  
}
