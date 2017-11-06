function formatDuration (seconds) {
  // Complete this function
     if (seconds == 0) {
         return "now";
     }
     var arr = [];
     var str = "";
     arr.push(seconds % 60);
     arr.push((((seconds - arr[0]) / 60) % 60));
     arr.push(((((seconds - arr[0]) / 60) - arr[1]) / 60) % 24);
     arr.push(((((((seconds - arr[0]) / 60) - arr[1]) / 60) - arr[2]) / 24) % 365);
     arr.push((((((((seconds - arr[0]) / 60) - arr[1]) / 60) - arr[2]) / 24) - arr[3]) / 365);
     arr.reverse();
     var time = [ arr[0] + " year", arr[1] + " day", arr[2] + " hour", arr[3] + " minute", arr[4] + " second"];
     time = time.filter(function(a) {
          if (a.charAt(0) != "0") {
              return a;
      }
     });
     time = time.map(function(a) {
         if (a.charAt(0) != "1" || a.charAt(1) != " ") {
             return a + "s";
         } else {
             return a;
         }
     });
     switch (time.length) {
         case 1:
         str += time [0];
         break;
         case 2:
         str += time[0] + " and " + time [1];
         break;
         case 3:
         str += time[0] + ", " + time[1] + " and " + time [2];
         break;
         case 4:
         str += time[0] + ", " + time[1] + ", " + time[2] + " and " + time[3];
         break;
         case 5:
         str += time[0] + ", " + time[1] + ", " + time[2] + ", " + time[3] + " and " + time [4];
         break;
     }
     return str;
}
