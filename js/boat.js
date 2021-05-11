function solution(people, limit) {
    var answer = 0;
    var aPerson = people.length-1;
    var bPerson = 0;
    
    people.sort(function(a, b){
        return a - b;
    });
    while(1){
        if(people[aPerson] * 2 <= limit){
            answer += Math.ceil((aPerson - bPerson + 1) / 2);
            break;
        }
        if(people[bPerson] + people[aPerson] <= limit){
            aPerson--;
            bPerson++;
            answer++;
        }else{
            aPerson--;
            answer++;
        }
        
        if(bPerson > aPerson){
            if(bPerson === aPerson){
                answer++;
            }
            break;
        }
    }
    
    return answer;
}

/*
function solution(people, limit) {
    var answer = 0;
    var aPerson = people.length-1;
    var bPerson = 0;
    
    people.sort(function(a, b){
        return a - b;
    });
    while(1){
        if(people[aPerson] * 2 <= limit){
            answer += Math.ceil((aPerson - bPerson + 1) / 2);
            break;
        }
        if(people[bPerson] + people[aPerson] <= limit){
            for(var i = aPerson-1; i >= bPerson; i--){
                if(people[i] + people[aPerson] <= limit){
                    people[i] = 0;
                    people.sort(function(a, b){
                        return a - b;
                    });
                    aPerson--;
                    bPerson++;
                    answer++;
                }    
            }
        }else{
            aPerson--;
            answer++;
        }
        
        if(bPerson > aPerson){
            if(bPerson === aPerson){
                answer++;
            }
            break;
        }
    }
    
    return answer;
}
*/


//https://programmers.co.kr/learn/courses/30/lessons/42885#qna