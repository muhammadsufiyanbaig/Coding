#include <stdio.h>

int main() {
    int n, factorial = 1, i = 1;
    printf("Enter a number: ");
    scanf("%d", &n);
    do {
        factorial *= i;
        i++;
    } while (i <= n);
    printf("Factorial of %d: %d\n", n, factorial);
    return 0;
}
