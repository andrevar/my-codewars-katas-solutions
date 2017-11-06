function TicTacToe() {
 // fill out the construction function
   this.currentPlayer = '';
   this.game = [1,2,3,4,5,6,7,8,9];
   this.count = 0; 
}

TicTacToe.prototype.move = function(field) {
    function check(board) {
     if(board[0] === board[1] && board[1] === board[2]) {
         return true;
     }
     if(board[3] === board[4] && board[4] === board[5]) {
         return true;
     }
     if(board[6] === board[7] && board[7] === board[8]) {
         return true;
     }
     if(board[0] === board[3] && board[3] === board[6]) {
         return true;
     }
     if(board[1] === board[4] && board[4] === board[7]) {
         return true;
     }
     if(board[2] === board[5] && board[5] === board[8]) {
         return true;
     }
     if(board[0] === board[4] && board[4] === board[8]) {
         return true;
     }
     if(board[2] === board[4] && board[4] === board[6]) {
         return true;
     }
     return false;
   } 
    var ai = function (player, board) {
       var moves = [5,1,3,7,9,2,4,6,8];
       for (var x = 0; x < moves.length; x++) {
           if(Number.isInteger(board[board.indexOf(moves[x])])) {
                 board[board.indexOf(moves[x])] = player;
                 return moves[x];
           }
       }          
   }
    if(this.count > 9) {
        return [0, 'Game ended']
    }
    if(!field) {
        if (this.currentPlayer == 'X') {
            this.currentPlayer = 'O';    
        } else {
            this.currentPlayer = 'X';
        }
        let temp = ai(this.currentPlayer, this.game);
        this.count += 1;
        if (check(this.game)) {
            this.count = 100;
            return [temp, 'I win!'];
        }
        if (this.game.every(a => typeof a === 'string')) {
            return [temp, "Draw!"]
        }
        return [temp, "Your move?"];
    } 
    if (this.currentPlayer == 'X') {
        this.currentPlayer = 'O';    
    } else {
        this.currentPlayer = 'X';
    }
    if (!this.game[this.game.indexOf(field)]) {
        if (this.currentPlayer == 'X') {
            this.currentPlayer = 'O';    
        } else {
            this.currentPlayer = 'X';
        }
        return [0, 'Illegal move'];
    }
    this.game[this.game.indexOf(field)] = this.currentPlayer;
    this.count += 1;
    if (check(this.game)) {
        this.count = 100;
        return [0, 'You win!'];
    }
    if (this.game.every(a => typeof a === 'string')) {
        return [0, "Draw!"]
    }
    if (this.currentPlayer == 'X') {
        this.currentPlayer = 'O';    
    } else {
        this.currentPlayer = 'X';
    }
    let temp = ai(this.currentPlayer, this.game);
    this.count += 1;
    if (check(this.game)) {
        this.count = 100;
        return [temp, 'I win!'];
    }
    if (this.game.every(a => typeof a === 'string')) {
        
        return [0, "Draw!"]
    }
    return [temp, "Your move?"];
}
var ttt = new TicTacToe();
