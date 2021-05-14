function solution(p)
{
    var answer = 0;
    var isBeautiful = false;
    for(var i = p; ; i++){
        var year = i.toString();
        for(var j = 0; j < year.length; j++){
            for(var k = j+1; k<year.length; k++){
                if(year[j] === year[k]) isBeautiful = false;
            }
        }
        if(isBeautiful){
            answer = i;
            return answer;
        }
        isBeautiful = true;
    }
    return answer;

}