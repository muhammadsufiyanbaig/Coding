#include<iostream>

int main()
{
    int a = 2;

    do
    {
        std::cout << a << "\t";
        a += 2;
    }
    while (a <= 12);

    return 0;
}
