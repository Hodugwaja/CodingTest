function solution(grade) {
    var answer = [];
    for(var i = 0; i<grade.length; i++){
        var score = 0;
        for(var j = 0; j<grade.length; j++){
            if(grade[j] > grade[i]) score++;
        }
        answer[i] = score+1;
    }
    
    return answer;
}