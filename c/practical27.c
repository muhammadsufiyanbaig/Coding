#include <stdio.h>

int main() {
    int n, factorial = 1, i;
    printf("Enter a number: ");
    scanf("%d", &n);
    for (i = 1; i <= n; i++) {
        factorial *= i;
    }
    printf("Factorial of %d: %d\n", n, factorial);
return 0;
}