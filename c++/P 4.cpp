#include<iostream>

int main()
{
    int a, b, c;

    std::cout << "Enter the table number: ";
    std::cin >> a;

    for (b = 1; b <= 10; b++)
    {
        c = a * b;
        std::cout << a << " x " << b << " = " << c << std::endl;
    }

    return 0;
}
