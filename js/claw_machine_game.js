function solution(board, moves) {
    var stack = [];
    var stackNumber = 0;
    var answer = 0;
    for(var i = 0; i<moves.length; i++){
       for(var j = 0; j<board.length; j++){
            if(board[j][moves[i]-1] != 0){
                if(stack[stackNumber-1] == board[j][moves[i]-1]){
                    stack[stackNumber-1] = 0;
                    stackNumber -= 1;
                    answer += 2;
                    
                }else{
                    stack[stackNumber++] = board[j][moves[i]-1];
                }
                board[j][moves[i]-1] = 0;
                break;
            }       
       } 
    } 
    console.log(stack);
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript