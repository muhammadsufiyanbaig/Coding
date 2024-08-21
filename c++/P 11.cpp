#include<iostream>

int main()
{
    int a, b, c, d;

    std::cout << "Enter any three numbers\n";
    std::cin >> a >> b >> c;

    if (a > b && a > c)
        d = a;
    else if (b > a && b > c)
        d = b;
    else
        d = c;

    std::cout << "The largest number is: " << d << std::endl;

    return 0;
}
