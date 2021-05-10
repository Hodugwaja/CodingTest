#include <iostream>
#include <math.h>


using namespace std;
int main() {
	int n;
	cin >> n;
	
	if(n == 1){
		printf("True");
		return 0;
	}
	for(int i = 2; i<=sqrt(n); i++){
			if(n % i == 0){
				printf("False");
				return 0;
			}
	}
	printf("True");
	return 0;
}

//https://level.goorm.io/exam/43238/%EC%86%8C%EC%88%98-%ED%8C%90%EB%B3%84/quiz/1