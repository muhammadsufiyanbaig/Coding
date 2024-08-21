#include<iostream>

int main()
{
    int a, b;
    int row = 4;

    for (a = row; a >= 1; --a)
    {
        for (b = 1; b <= a; ++b)
        {
            std::cout << b;
        }
        std::cout << std::endl;
    }

    return 0;
}
