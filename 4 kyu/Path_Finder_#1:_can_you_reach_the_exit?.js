function pathFinder(maze){
 maze = maze.split('\n').map(a=> a = a.split(''));
 var path = [];
 var pathTemp = [];
 var startX = 0 
 var startY = 0
 var endX = maze[0].length - 1;
 var endY = maze.length - 1;
 for (let y = 0; y < maze.length; y++) {
     let temp = [];    
     for (let x = 0; x < maze[0].length; x++) {
         temp.push(false);
     }
     path.push(temp);
     pathTemp.push(temp);
 }
 function exit(x, y) {
     if(x == endX && y == endY) {
         return true;
     }
     if(maze[x][y] == 'W' || pathTemp[x][y]) {
         return false;
     }
     pathTemp[x][y] = true;
     if (x != 0) {
        if (exit(x-1, y)) { 
            path[x][y] = true; ;
            return true;
        }
     }   
     if (x != endX) {
        if (exit(x+1, y)) { 
            path[x][y] = true;
            return true;
        }
     }   
     if (y != 0) {
        if (exit(x, y-1)) { 
            path[x][y] = true;
            return true;
        }
     } 
     if (y != endY) {
        if (exit(x, y+1)) { 
            path[x][y] = true;
            return true;
        }
     }   
    return false;
 }
 
 return exit(startX, startY);
}
