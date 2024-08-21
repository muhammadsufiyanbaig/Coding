#include<iostream>

int main()
{
    int a, b;
    int f = 1;

    std::cout << "Find factorial of the number: ";
    std::cin >> a;

    for (b = 1; b <= a; b++)
    {
        f *= b;
    }

    std::cout << "\nThe factorial of " << a << " is " << f << std::endl;

    return 0;
}
