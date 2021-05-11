function solution(numbers) {
    
    var answer = '';
    
    numbers.sort(function(a, b){
        return ''+a+b >''+b+a ? -1 : 1;
    });
    console.log(numbers); 
    if(numbers[0] === 0) return '0';
    for(var i = 0; i < numbers.length; i++){
        answer += numbers[i].toString();
    }
    return answer;
}

//https://programmers.co.kr/learn/courses/30/lessons/42746