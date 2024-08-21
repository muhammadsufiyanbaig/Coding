//formate specifier
#include <stdio.h>

int main() {
    int age = 18;
    char grade = 'A';
    float height = 5.9;
    long int Networth = 1000000000;
    char name[] = "Muhammad Sufiyan Baig";
    
    printf("Name: %s\nAge: %d\nGrade: %c\nHeight: %.2f\nNetworth: %ld\n", name, age, grade, height, Networth);
    
    return 0;
}
