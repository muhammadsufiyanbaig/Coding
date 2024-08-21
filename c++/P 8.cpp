#include<iostream>

int main()
{
    int a;
    std::cout << "Enter a number between 1 to 3: ";
    std::cin >> a;

    switch(a)
    {
        case 1:
            std::cout << "\nYou entered one." << std::endl;
            break;
        case 2:
            std::cout << "\nYou entered two." << std::endl;
            break;
        case 3:
            std::cout << "\nYou entered three." << std::endl;
            break;
        default:
            std::cout << "\nError!!!" << std::endl;
    }

    return 0;
}
