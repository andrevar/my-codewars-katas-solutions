function scramble(str1, str2) {
 //code me
 var obj1 = {};
 var obj2 = {};
 function objectify(string, object) {
     var array = string.split('');
     array.map(function(a) {
         object[a] = (object[a] || 0) +1;
         return object[a];
 });
 }
 objectify(str1, obj1);
 objectify(str2, obj2) ;
 for (var b in obj2) {
     if(obj1.hasOwnProperty(b) && obj1[b] >= obj2[b]) {
         continue;
     } else {
         return false;
     }
 }
 
  return true;
}
