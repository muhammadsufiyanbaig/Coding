//arithmetic calculator
#include <stdio.h>
int main()
{
    int a;
    int b;
    printf("Enter a first number:\t");
    scanf("%d", &a);

    printf("Enter a second number:\t");
    scanf("%d", &b);
    
    printf("Sum: %d\n", a + b);
    printf("Subtract: %d\n", a - b);
    printf("Multiply: %d\n", a * b);
    printf("Division: %d\n", a / b);

    return 0;
}