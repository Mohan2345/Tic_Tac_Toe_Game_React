function isWinner (board,symbol) {

    if(board[0] == board[1] && board[1] == board[2] && board[0] == symbol){
        return symbol;
    }
    else if(board[3] == board[4] && board[4] == board[5] && board[3] == symbol){
        return symbol;
    }
    else if(board[6] == board[7] && board[7] == board[8] && board[6] == symbol){
        return symbol;
    }    
    else if(board[0] == board[3] && board[3] == board[6] && board[0] == symbol){
        return symbol;
    }
    else if(board[1] == board[4] && board[4] == board[7] && board[1] == symbol){
        return symbol;
    }
    else if(board[2] == board[5] && board[5] == board[8] && board[2] == symbol){
        return symbol;
    }
    else if(board[0] == board[4] && board[4] == board[8] && board[0] == symbol){
        return symbol;
    }
    else if(board[2] == board[4] && board[4] == board[6] && board[2] == symbol){
        return symbol;
    }
      
}

export default isWinner;