#include<iostream>
using namespace std;

double cube(int a);

int main()
{
    int x;
    cout << "Enter a number: ";
    cin >> x;
    
    double result = cube(x);
    cout << "\nThe cube of the given number is: " << result << endl;

    return 0;
}

double cube(int a)
{
    return static_cast<double>(a * a * a);
}
