//Scanf() with Different Data Types
#include <stdio.h>

int main() {
    int a;
    float b;
    char c;
    printf("Enter an integer, a float, and a character: ");
    scanf("%d %f %c", &a, &b, &c);
    printf("You entered: %d, %.2f, %c\n", a, b, c);
    return 0;
}
