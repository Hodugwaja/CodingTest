function solution(numbers, target) {
    var tree = [];
    var answer = 0;
    tree[0] = 0;
    console.log(numbers);
    for(var i = 0; i<numbers.length; i++){
        for(var j = Math.pow(2, i)-1; j<Math.pow(2, i+1); j++){
            tree[j*2+1] = tree[j] - numbers[i];
            tree[j*2+2] = tree[j] + numbers[i];
        }
        console.log(tree);
        console.log(numbers[i]);
    }
    for(var i = Math.pow(2, numbers.length); i<=tree.length; i++){
        if(tree[i] === target){
            answer++;
            console.log(i);
        }
        
    }
    console.log(tree);
    return answer;
}

//https://programmers.co.kr/learn/courses/30/lessons/43165#