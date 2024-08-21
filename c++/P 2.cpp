#include<iostream>
#include<conio.h>

int main()
{    
    char a[20];
    char b[6];
    int age;
    float f;

    std::cout << "\nEnter Your Name: ";
    std::cin.getline(a, sizeof(a)); // Use getline to allow spaces in the name

    std::cout << "\nEnter Your Age: ";
    std::cin >> age;

    std::cout << "\nEnter Your Height: ";
    std::cin >> f;

    std::cout << "\nEnter Your Gender: ";
    std::cin >> b;

    getch();
    return 0;
}
