console.log(moves);
    for(var i = 0; i<moves.length; i++){
        if(moves[i] === "U") botLocation[1]++;function solution(moves) {
    var botLocation = [0, 0];
    var botNum = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
        if(moves[i] === "R") botLocation[0]++;
        if(moves[i] === "D") botLocation[1]--;
        if(moves[i] === "L") botLocation[0]--;
        
        console.log(botLocation);
        
        botNum[1][botLocation[1] + 2]++;
        botNum[0][botLocation[0] + 2]++;
    }
    
    console.log(botNum)
    var answer = 0;
    return answer;
}