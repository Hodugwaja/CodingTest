#include<iostream>

using namespace std;

int main()
{
    int V, A, B;
    int day = 0;

    cin >> A >> B >> V ;

    day = (V - B - 1) / (A - B) + 1;

    cout<<day<<endl;
    return 0;
}