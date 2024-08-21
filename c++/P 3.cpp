#include<iostream>
#include<cmath>
#define PI 3.141

int main()
{
    int a, b, r;
    float s, t;

    std::cout << "Enter altitude of triangle: ";
    std::cin >> a;

    std::cout << "\nEnter base of triangle: ";
    std::cin >> b;

    std::cout << "\nEnter radius of sphere: ";
    std::cin >> r;

    t = (1.0 / 2.0) * (a * b);
    s = (4.0 / 3.0) * PI * std::pow(r, 3);

    if (t > s)
    {
        std::cout << "\nThe area of triangle is = " << t << std::endl;
        std::cout << "\nThe volume of sphere is = " << s << std::endl;
    }
    else
    {
        std::cout << "\nThe volume of sphere is = " << s << std::endl;
        std::cout << "\nThe area of triangle is = " << t << std::endl;
    }

    return 0;
}
