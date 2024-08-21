#include<iostream>

int main()
{
    int a, b;
    std::cout << "Enter any number: ";
    std::cin >> a;

    bool isPrime = true;
    for (b = 2; b <= a / 2; b++)
    {
        if (a % b == 0)
        {
            isPrime = false;
            break;
        }
    }

    if (a <= 1) {
        isPrime = false;
    }

    if (isPrime)
        std::cout << "\n" << a << " is a prime number" << std::endl;
    else
        std::cout << "\n" << a << " is not a prime number" << std::endl;

    return 0;
}
