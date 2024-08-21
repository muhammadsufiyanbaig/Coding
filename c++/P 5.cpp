#include<iostream>

int main()
{
    int a = 1;

    do
    {
        std::cout << a << "\t";
        a += 2;
    }
    while (a <= 11);

    return 0;
}
