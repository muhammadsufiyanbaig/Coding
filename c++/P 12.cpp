#include<iostream>

int main()
{
    int a;
    for (a = 65; a <= 90; a++)
    {
        std::cout << a << "=" << static_cast<char>(a);
        std::cout << "\t";
    }

    return 0;
}
