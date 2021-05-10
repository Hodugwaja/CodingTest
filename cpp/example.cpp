#include<iostream>
#include<cstring>

using namespace std;

int main()
{
    int array[10] = {0};

    memset(array, 500, sizeof(array));
    for(int i = 0; i<2; i++){
        scanf("%d", &array[i]);
    }

    for(int i = 0 ; i<10; i++){
        printf("%d ", array[i]);
    }
}