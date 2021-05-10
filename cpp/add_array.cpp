#include<iostream>

using namespace std;

int main()
{
    int n, m;
    cin >> n >> m;
    int cntA = 0, cntB = 0;
    int A[50000] = {19721121}, B[50000] = {19721121};
    int C[100000];

    for(int i = 0; i<n; i++){
        cin >> A[i];
    }
    for(int i = 0; i<m; i++){
        cin >> B[i];
    }

    for(int i = 0; i<n+m; i++){
			
        if(A[cntA] < B[cntB] && cntA < n){
            C[i] = A[cntA++];
        }else if(cntB < m){
            C[i] = B[cntB++];
        }else{
					C[i] = A[cntA++];
				}
    }
    for(int i = 0; i<n+m; i++){
        printf("%d ", C[i]);
    }
}

// https://level.goorm.io/exam/43250/%EB%B0%B0%EC%97%B4-%ED%95%A9%EC%B9%98%EA%B8%B0/quiz/1