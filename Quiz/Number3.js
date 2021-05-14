var directionX = [0, -1, 0, 1];
var directionY = [-1, 0, 1, 0];

function visit(x, y, v, cnt)
{
    if(v[x][y] != 1) return cnt;
    cnt++;
    v[x][y] = 2;
    for(var i = 0; i < 4; i++){
        var dirX = directionX[i] + x;
        var dirY = directionY[i] + y;

        if(dirX > -1 && dirY > -1 && dirX < v.length && dirY < v[0].length){
            cnt += visit(dirX, dirY, v, 0);
        }
    }
    return cnt;
}

function solution(v)
{
    
    var answer = [0,0];
    for(var i = 0; i<v.length; i++){
        for(var j = 0; j < v[0].length; j++){
            if(v[i][j] == 1){
                console.log(i, j);
                var large = visit(i, j, v, 0);
                console.log("섬크기 : ", large);
                answer[0]++;
                if(answer[1] < large) answer[1] = large;
            }
        }
    }
    return answer;
}