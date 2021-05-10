import 'dart:io';
void main() {
	var i;
  var a = stdin.readLineSync().split(' ').map((e) => int.parse(e)).toList();
  var n = a[0];
  var m = a[1];

  var A = List.filled(5000, 9999);
  var fdsA = stdin.readLineSync().split(' ').map((e) => int.parse(e)).toList();
  A.replaceRange(0, fdsA.length - 1, fdsA);
  
  var B = List.filled(5000, 9999);
  var fdsB = stdin.readLineSync().split(' ').map((e) => int.parse(e)).toList();
  B.replaceRange(0, fdsB.length - 1, fdsB);
  
  var C = [];

  var cntA = 0, cntB = 0;

  for(i = 0; i<n+m; i++){
    if(A[cntA] < B[cntB] && cntA < n){
        C[i] = A[cntA++];
    }else if(cntB < m){
        C[i] = B[cntB++];
    }else{
        C[i] = A[cntA++];
    }
  }

  for(i = 0; i<n+m; i++){
        print(C[i]);
    }
}