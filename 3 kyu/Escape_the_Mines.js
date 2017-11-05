function solve(map, miner, exit) {
   var path = [];
   var pathTemp = [];
   var directions = [];
   var startX = miner.x 
   var startY = miner.y
   var endX = exit.x;
   var endY = exit.y;
   for (let y = 0; y < map.length; y++) {
     let temp = [];    
     for (let x = 0; x < map[0].length; x++) {
         temp.push(false);
     }
     path.push(temp);
     pathTemp.push(temp);
   }
   function exitMaze(x, y) {
     if(x == endX && y == endY) {
         return true;
     }
     if(map[x][y] === false || pathTemp[x][y]) {
         return false;
     }
     pathTemp[x][y] = true;
     if (y != map[0].length - 1) {
        if (exitMaze(x, y+1)) { 
            path[x][y] = true;
            directions.push('down');
            return true;
        }
     }   
     if (x !== 0) {
        if (exitMaze(x-1, y)) { 
            path[x][y] = true;
            directions.push('left');
            return true;
        }
     }   
     if (x != map.length - 1) {
        if (exitMaze(x+1, y)) { 
            path[x][y] = true;
            directions.push('right');
            return true;
        }
     }   
     if (y !== 0) {
        if (exitMaze(x, y-1)) { 
            path[x][y] = true;
            directions.push('up');
            return true;
        }
     } 
     
    return false;
 }
 exitMaze(startX, startY);
 return directions.reverse();
}
